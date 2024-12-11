'use client'

import { type Transaction } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from '@/app/_constants/transactions'

import DeleteTransactionButton from '../_components/delete-transaction-button'
import EditTransactionButton from '../_components/edit-transaction-button'
import TransactionTypeBadge from '../_components/type-badge'

export const TransactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de Pagamento',
    cell: ({ row: { original: transaction } }) => {
      const paymentMethod =
        TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod]
      return <div className="w-[150px]">{paymentMethod}</div>
    },
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) => {
      const date = new Date(transaction.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      return <div className="w-[175px]">{date}</div>
    },
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton transactionId={transaction.id} />
        </div>
      )
    },
  },
]
