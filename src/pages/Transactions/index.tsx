import { SearchForm } from "./SearchForm";
import { instanceTransactions } from "../../api"
import { Header } from "../../components/Header";
import { Summery } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { useEffect, useState } from "react";

interface ITransactions {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
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
    <div>
      <Header />
      <Summery />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map(transaction => {
            return (
              <tbody key={transaction.id}>
                <tr>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              </tbody>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}