import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import AddTransactionButton from '../_components/add-transaction-button'
import NavBar from '../_components/navbar'
import { DataTable } from '../_components/ui/data-table'
import { db } from '../_lib/prisma'
import { TransactionsColumns } from './_columns'

const TransactionsPage = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: 'desc',
    },
  })
  return (
    <>
      <NavBar />
      <div className="space-y-6 overflow-hidden p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable
          columns={TransactionsColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  )
}

export default TransactionsPage
