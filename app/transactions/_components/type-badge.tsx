import { Transaction, TransactionType } from '@prisma/client'
import { CircleIcon } from 'lucide-react'

import { Badge } from '@/app/_components/ui/badge'

interface TransactionTypeBadgeProps {
  transaction: Transaction
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-primary/20">
        <CircleIcon className="mr-1 fill-primary" size={10} />
        Depósito
      </Badge>
    )
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-bold text-danger hover:bg-danger/20">
        <CircleIcon className="mr-1 fill-danger" size={10} />
        Despesa
      </Badge>
    )
  }
  return (
    <Badge className="bg-white/10 font-bold text-white hover:bg-white/20">
      <CircleIcon className="mr-1 fill-white" size={10} />
      Investimento
    </Badge>
  )
}

export default TransactionTypeBadge
