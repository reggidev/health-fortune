import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { LogInIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { Button } from '../_components/ui/button'

const LoginPage = async () => {
  const { userId } = await auth()
  if (userId) {
    redirect('/')
  }

  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col items-center justify-center p-8 lg:items-start">
        <Image
          src="/logo.svg"
          alt="Health Fortune"
          width={173}
          height={39}
          style={{ width: 'auto', height: 'auto' }}
          className="mb-8"
          priority
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 max-w-sm text-center text-muted-foreground lg:max-w-none lg:text-left">
          O Health Fortune é uma plataforma de gestão financeira feito para
          monitorar suas movimentações, facilitando o controle do seu orçamento
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative hidden h-full w-full lg:flex">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default LoginPage
