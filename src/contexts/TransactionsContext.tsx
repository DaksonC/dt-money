import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'

interface ITransactions {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface ICreateTransactions {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface ITransactionsContextType {
  transactions: ITransactions[]
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (data: ICreateTransactions) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransaction(query?: string) {
    try {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })

      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function createTransaction(data: ICreateTransactions) {
    const { description, price, category, type } = data

    try {
      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransaction,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
