import { RegisterAuth } from '@/components/Register/Formulario'

export default function RegisterNewUserId({ params: { username } }: { params: { username: string } }) {
  return <RegisterAuth sponsor={username} />
}
