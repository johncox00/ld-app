import React, { useEffect } from "react";
import { useLDClient } from "launchdarkly-react-client-sdk";

const ErrorButton = ({ context }) => {
  const ldClient = useLDClient();
  if (!context) {
    context = {
      kind: 'user',
      anonymous: true,
    };
  }
  useEffect(() => {
    ldClient.identify(context);
  }, [ldClient, context]);

  const clicked = () => {
    ldClient.track('error-rate');
  };
  return (
    <button onClick={clicked}>Trigger Error Event</button>
  )
};

export default ErrorButton;
