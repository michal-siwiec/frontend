import { createContext } from 'react';

type OrderContextType = { step: number, setStep: (step: number) => void }

export const OrderContext = createContext<OrderContextType>({ step: 0, setStep: () => {} });
