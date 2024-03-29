import { useContext } from 'react'
import { SearchForm } from './SearchForm'
import { Header } from '../../components/Header'
import { Summery } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summery />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          {transactions.map((transaction) => {
            return (
              <tbody key={transaction.id}>
                <tr>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              </tbody>
            )
          })}
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
