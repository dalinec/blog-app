'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const qurtyClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={qurtyClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
