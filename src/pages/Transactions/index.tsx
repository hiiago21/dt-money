import { useContext } from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Sumary } from '../../components/Sumary'
import { TransactionTable, TransactionsComtainer } from './style'
import { SearchForm } from './components/SearchForm'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { priceFormatter, dateFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionContext)
  return (
    <div>
      <Header />
      <Sumary />
      <TransactionsComtainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%"> {transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionsComtainer>
    </div>
  )
}

interface PriceGighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceGighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
