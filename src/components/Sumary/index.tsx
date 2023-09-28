import { ArrowCircleUp } from '@phosphor-icons/react'
import { SumaryCard, SumaryContainer } from './style'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr/ArrowCircleDown'
import { CurrencyDollar } from '@phosphor-icons/react/dist/ssr/CurrencyDollar'
import { priceFormatter } from '../../utils/formatter'
import { useSumary } from '../../hooks/useSumary'

export function Sumary() {
  const summary = useSumary()
  return (
    <SumaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SumaryCard>

      <SumaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={30} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SumaryCard>

      <SumaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={30} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SumaryCard>
    </SumaryContainer>
  )
}
