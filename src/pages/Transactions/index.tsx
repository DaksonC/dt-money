import { Header } from "../../components/Header";
import { Summery } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summery />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvendo site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/03/2022</td>
            </tr>
            <tr>
              <td width="50%">Humburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 59,90
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}