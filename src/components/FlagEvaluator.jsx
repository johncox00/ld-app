import { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

const FlagEvaluator = (props) => {
  let { flagKey, flagValueMap } = props;
  const [flagValue, setFlagValue] = useState(null);
  const flags = useFlags();
  useEffect(() => {
    const val = flags && flags[flagKey];
    if (val !== undefined) {
      setFlagValue(val);
    }
  }, [flags]);

  return flagValueMap[flagValue] || null;
};

export default FlagEvaluator;
