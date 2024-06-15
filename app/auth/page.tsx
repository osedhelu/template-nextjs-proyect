import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

const AuthRootPage: NextPage = () => {
  redirect('/auth/login')
}

export default AuthRootPage
