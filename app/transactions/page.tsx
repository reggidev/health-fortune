import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import AddTransactionButton from '../_components/add-transaction-button'
import NavBar from '../_components/navbar'
import NavBarBottom from '../_components/navbar-bottom'
import { DataTable } from '../_components/ui/data-table'
import { ScrollArea } from '../_components/ui/scroll-area'
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
      <div className="container flex flex-col space-y-6 overflow-hidden p-6 pb-20 md:pb-0">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={TransactionsColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
      <NavBarBottom />
    </>
  )
}

export default TransactionsPage
