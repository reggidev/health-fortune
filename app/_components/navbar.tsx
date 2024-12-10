'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        </Link>
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'font-bold text-primary'
              : 'text-muted-foreground'
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === '/transactions'
              ? 'font-bold text-primary'
              : 'text-muted-foreground'
          }
        >
          Transações
        </Link>
      </div>
      {/* DIREITA */}
      <UserButton showName />
    </nav>
  )
}

export default NavBar
