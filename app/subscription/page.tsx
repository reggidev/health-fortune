import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import NavBar from '../_components/navbar'

const SubscriptionPage = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  return <NavBar />
}

export default SubscriptionPage
