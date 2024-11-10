'use client'

import { ArrowDownUpIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import UpsertTransactionDialog from './upsert-transaction-dialog'

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full" onClick={() => setDialogIsOpen(true)}>
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  )
}

export default AddTransactionButton
