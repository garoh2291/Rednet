"use client";
import { useEffect, useState } from "react";

interface UseFetchParams<T> {
  apiCallback: () => Promise<T>;
  initialValue: T;
  dependencies: any[];
}

const useFetch = <T, E = Error>({
  apiCallback,
  initialValue,
  dependencies,
}: UseFetchParams<T>) => {
  console.log("useFetch");
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<E | null>(null);

  useEffect(() => {
    setLoading(true);
    apiCallback()
      .then((response) => {
        console.log("response", response);
        setData(response);
      })
      .catch((err: E) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [...dependencies]);

  return { data, loading, error };
};

export default useFetch;
