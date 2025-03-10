import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import './index.css'
import App from './App.jsx'



(async () => {
  const LDProvider = await asyncWithLDProvider({ clientSideID: import.meta.env.VITE_LD_KEY });
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>,
  )
})();
