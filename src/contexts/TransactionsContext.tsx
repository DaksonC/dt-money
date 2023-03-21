import { createContext, useEffect, useState } from 'react';
import { instanceTransactions } from '../api';

interface ITransactions {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface ITransactionsContextType {
  transactions: ITransactions[];
}

interface ITransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function loadTransactios() {
    await instanceTransactions.get("/transactions")
      .then(response => setTransactions(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    loadTransactios()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}