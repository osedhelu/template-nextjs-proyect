import { RegisterAuth } from '@/components/Register/Formulario'

export default function RegisterNewUserId({ params: { username } }: any) {
  return <RegisterAuth sponsor={username} />
}
