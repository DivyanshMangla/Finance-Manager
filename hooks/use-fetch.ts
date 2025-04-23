import { useState } from "react";
import { toast } from "sonner";

type AsyncCallback<TArgs extends any[], TResult> = (...args: TArgs) => Promise<TResult>;

const useFetch<TArgs extends any[], TResult> = (cb: (...args: TArgs) => Promise<TResult>) => {
  const [data, setData] = useState<TResult | undefined>(undefined);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: TArgs) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error: Error) {
      const err = error instanceof Error ? error : new Error("Unknown error");
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;