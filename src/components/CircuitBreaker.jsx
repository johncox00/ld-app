// Code for the CircuitBreaker component
const CircuitBreaker = () => {
  const toggleFlag = () => {
    const flag = 'blinkingTitle';
    const auth = { 'Authorization': import.meta.env.VITE_LD_TOKEN };
    fetch(`https://app.launchdarkly.com/api/v2/flags/default/${flag}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
    body: JSON.stringify([
      {
        "op": "replace",
        "path": "/environments/test/on",
        "value": false
      }
    ])
  })
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
  };

  return (
    <button onClick={toggleFlag}>Oh no! (rollback)</button>
  );
};

export default CircuitBreaker;
