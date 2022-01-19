import { useCallback, useState, useEffect } from 'react';

const isValidJSONString = (str) => {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }
  return true;
};

const getLocalStorageValue = (key, defaultValue) => {
  const json = window.localStorage.getItem(key);

  if (isValidJSONString(json)) {
    return JSON.parse(json) || defaultValue;
  }
  return json || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(getLocalStorageValue(key, defaultValue));

  useEffect(() => {
    setValue(getLocalStorageValue(key, defaultValue));
  }, [key]);

  const setLocalStorageValue = useCallback(
    (newValue) => {
      if (key) {
        window.localStorage.setItem(
          key,
          typeof newValue === 'string' ? newValue : JSON.stringify(newValue)
        );
        setValue(newValue);
      }
    },
    [key]
  );

  return [value, setLocalStorageValue];
};