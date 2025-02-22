import AddTransactionButton from '@/app/_components/add-transaction-button'
import { Card, CardContent, CardHeader } from '@/app/_components/ui/card'

interface SummaryCardProps {
  icon: React.ReactNode
  title: string
  amount: number
  size?: 'small' | 'large'
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = 'small',
}: SummaryCardProps) => {
  return (
    <Card className={`${size === 'large' ? 'bg-white/5' : ''}`}>
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          {icon}
          <p
            className={`${size === 'small' ? 'text-muted-foreground' : 'text-white opacity-70'}`}
          >
            {title}
          </p>
        </div>
        <div>{size === 'large' && <AddTransactionButton />}</div>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === 'small' ? 'text-2xl' : 'text-4xl'}`}
        >
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(amount)}
        </p>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
