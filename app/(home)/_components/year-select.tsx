'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select'

const YEAR_OPTIONS = [
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
]

const YearSelect = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const month = searchParams.get('month')
  const year = searchParams.get('year')

  const handleYearChange = (year: string) => {
    const currentMonth = new Date().getMonth() + 1
    const newMonth = month || String(currentMonth).padStart(2, '0')

    push(`/?year=${year}&month=${newMonth}`)
  }

  return (
    <Select
      onValueChange={(value) => handleYearChange(value)}
      defaultValue={year ?? ''}
    >
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder="Ano" />
      </SelectTrigger>
      <SelectContent>
        {YEAR_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default YearSelect
