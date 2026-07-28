import { useState, useCallback } from 'react';

export type ConversionStatus = 'idle' | 'processing' | 'done' | 'error';

export interface ConversionState {
  status: ConversionStatus;
  progress: number;
  errorMessage?: string;
}

export function useFileConversion() {
  const [state, setState] = useState<ConversionState>({
    status: 'idle',
    progress: 0,
  });

  const setProgress = useCallback((progress: number) => {
    setState((prev) => ({ ...prev, progress: Math.min(100, Math.max(0, progress)) }));
  }, []);

  const startProcessing = useCallback(() => {
    setState({ status: 'processing', progress: 0 });
  }, []);

  const setDone = useCallback(() => {
    setState({ status: 'done', progress: 100 });
  }, []);

  const setError = useCallback((errorMessage: string) => {
    setState({ status: 'error', progress: 0, errorMessage });
  }, []);

  const reset = useCallback(() => {
    setState({ status: 'idle', progress: 0 });
  }, []);

  return {
    ...state,
    setProgress,
    startProcessing,
    setDone,
    setError,
    reset,
  };
}
