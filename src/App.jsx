import { useState, useEffect } from 'react'
import { useLDClient } from "launchdarkly-react-client-sdk";
import ProductListing from './components/ProductListing';
import FlagEvaluator from './components/FlagEvaluator';
import CircuitBreaker from './components/CircuitBreaker';
import ErrorButton from './components/ErrorButton';
import Hero from './components/Hero';
import './App.css'

function App() {
  const getContext = () => {
    const ctx = {
      location,
      kind: "user",
    }
    if (!user || user === 'anonymous') {
      return { 
        ...ctx,
        anonymous: true,
      }
    }
    return {
      ...ctx,
      key: user,
    }
  };

  const query = new URLSearchParams(window.location.search);
  const userParam = query.get('user');
  const locationParam = query.get('location');
  const [initialId, setInitialId] = useState(false);
  const [user, setUser] = useState(userParam || 'anonymous');
  const [location, setLocation] = useState(locationParam || 'US');
  const ldClient= useLDClient();
  ldClient.identify(getContext(),null, () => {
    setInitialId(true);
  });

  const userChanged = (u) => {
    if (u !== user) {
      setUser(u)
      ldClient.identify(getContext())
    } 
  };

  const locationChanged = (l) => {
    if (l !== location) {
      setLocation(l)
      ldClient.identify(getContext())
    }
  };

  useEffect(() => {
    let reid = false;
    if (userParam && userParam !== user) {
      setUser(userParam);
      reid = true;
    }
    if (locationParam && locationParam !== location) {
      setLocation(locationParam);
      reid = true;
    }
    if (reid) {
      ldClient.identify(getContext());
    }
  }
  , [ldClient, userParam, locationParam]);

  if (!initialId) {
    return <div>Loading...</div>
  };

  return (
    <>
      <div className="app-container">
        {/* Floating Controls Panel */}
        <div className="feature-controls">
          <div className="feature-controls-header">
            <h3>Control Panel</h3>
          </div>
          <div className="feature-controls-content row">
            <div className="col-xs-12 col-xl-4 col-lg-4 col-md-4">
              <h3>Select User</h3>
              {
                ['anonymous', 'user1', 'user2', 'prodTester'].map((u) => (
                  <>
                  <input type="radio" value={u} id="user" onClick={() => userChanged(u)} checked={user === u} key={u} /> {u}
                  <br />
                  </>
                ))
              }
            </div>
            <div className="col-xs-12 col-xl-4 col-lg-4 col-md-4">
              <h3>Location</h3>
              {
                ['US', 'CA', 'GB'].map((l) => (
                  <>
                  <input type="radio" value={l} id="location" onClick={() => locationChanged(l)} checked={location === l} key={l} /> {l}
                  <br />
                  </>
                ))
              }
            </div>
            <div className="col-xs-12 col-xl-4 col-lg-4 col-md-4">
              <h3>Mock Error Scenario</h3>
              <CircuitBreaker />
              <br />
              <br />
              <ErrorButton context={getContext()} />
            </div>
          </div>
        </div>
        <FlagEvaluator
          flagKey="tester"
          flagValueMap={{
            true: <Hero />,
            false: null
          }}
        />
        {/* Main Content */}
        <div className="container">
          <div className="row app-container">
            <div className="col-xs-12">
              <FlagEvaluator
                flagKey="blinkingTitle"
                flagValueMap={{
                  true: <h1 className='blink'>Feature Flag Demo</h1>,
                  false: <h1>Feature Flag Demo</h1>
                }}
              />
              <ProductListing />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

