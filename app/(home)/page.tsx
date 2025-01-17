import { auth } from '@clerk/nextjs/server'
import { isMatch } from 'date-fns'
import { redirect } from 'next/navigation'

import NavBar from '../_components/navbar'
import NavBarBottom from '../_components/navbar-bottom'
import { getDashboard } from '../_data/get-dashboard'
import ExpensesPerCategory from './_components/expenses-per-category'
import LastTransactions from './_components/last-transactions'
import MonthSelect from './_components/month-select'
import SummaryCards from './_components/summary-cards'
import TransactionsPieChart from './_components/transactions-pie-chart'
import YearSelect from './_components/year-select'

interface HomeProps {
  searchParams: {
    month: string
    year: string
  }
}

const Home = async ({ searchParams: { month, year } }: HomeProps) => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  const monthIsInvalid = !month || !isMatch(month, 'MM')
  const yearIsInvalid = !year || !['2024', '2025'].includes(year)

  if (monthIsInvalid || yearIsInvalid) {
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0')
    const currentYear = String(new Date().getFullYear())
    redirect(`?year=${currentYear}&month=${currentMonth}`)
  }

  const dashboard = await getDashboard(month, year)

  return (
    <>
      <NavBar />
      <div className="container flex flex-col space-y-6 p-4 pb-20 md:pb-0 lg:overflow-hidden lg:p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <YearSelect />
            <MonthSelect />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr,1fr] lg:overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
      <NavBarBottom />
    </>
  )
}

export default Home
