import { createContext, useEffect, useState } from 'react';
import { api } from '../api';

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
  fetchTransaction: (query?: string) => Promise<void>;
}

interface ITransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransaction(query?: string) {
    try {
      const response = await api.get('/transactions', {
        params: {
          q: query
        }
      })

      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}