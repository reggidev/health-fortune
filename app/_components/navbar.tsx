'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop NavBar */}
      <nav className="hidden justify-between border-b border-solid px-8 py-4 lg:flex">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={173}
              height={39}
              alt="Health Fortune"
            />
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
        <UserButton showName />
      </nav>

      {/* Mobile NavBar */}
      <nav className="flex items-center justify-between border-b px-6 py-5 lg:hidden">
        <Link href="/">
          <Image src="/logo.svg" width={173} height={39} alt="Health Fortune" />
        </Link>
        <UserButton />
      </nav>
    </>
  )
}

export default NavBar
