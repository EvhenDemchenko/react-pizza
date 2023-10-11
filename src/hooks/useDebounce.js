import { useState, useEffect } from 'react';

export const useDebaunce = (value, delay) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebauncedValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [debauncedValue, delay, value]);

  return debauncedValue;
};
