import { useState, useEffect, useCallback } from 'react';

const API_URL = `http://localhost:3001/api`

export default function useDataPollingFetching(url, intervalMs = 60000) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // Don't set loading on subsequent polls to avoid UI flicker
      if (data === null) {
        setIsLoading(true);
      }

      const response = await fetch(API_URL + url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newData = await response.json();
      setData(newData.quote);
      setError(null);
    } catch (e) {
      console.error("Polling error:", e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, data]); // Include 'data' if you need to use previous data in the logic

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, intervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchData, intervalMs]);

  return { data, isLoading, error }
};