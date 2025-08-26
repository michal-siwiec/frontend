import { createContext } from 'react';

type OrderContextType = { step: number, setStep: () => void } | null

export const OrderContext = createContext<OrderContextType>(null);
