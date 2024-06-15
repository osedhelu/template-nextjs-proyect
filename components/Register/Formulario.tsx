'use client'
import { DataPaises } from '@/utils/paises'
import Link from 'next/link'
import { useState, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { showToast } from '../Toast/storeToast'
import { InputPersonal, InputSelect } from '../ui/InputPersonal'

interface props {
  children?: React.ReactNode
  sponsor: string
}

export const RegisterAuth: FC<props> = ({ sponsor: sponsor_id }) => {
  //   const { address, isConnected } = useWeb3ModalAccount()

  const [country, setCountry] = useState(DataPaises[60])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const handleRegistration = async (data: unknown) => {
    console.log({
      ...(data as { username: string; email: string; password: string; birth_date: string }),
      //   wallet: address,
      pais_emoji: country.emoji,
      pais_name: country.name_es,
      pais_code: country.dial_code,
      sponsor: sponsor_id,
    })
    showToast({
      status: 'success',
      text: 'Registrado',
    })
  }

  const validateFecha = (value: string) => {
    const selectedDate = new Date(value)
    const currentDate = new Date()
    const minAge = 18

    const diffInYears = currentDate.getFullYear() - selectedDate.getFullYear()

    if (diffInYears < minAge) {
      return 'Debes ser mayor de edad'
    }

    return true
  }
  return (
    <>
      <div className="mb-8 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <Link href="#" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Alerta
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Para hacer el registro en nuestra plataforma debe conectar su wallet
        </p>
      </div>
      <form className="grid grid-cols-1 gap-6 " onSubmit={handleSubmit(handleRegistration)}>
        <InputPersonal
          {...{
            type: 'text',
            message: errors.username?.message || 'No tener espacion y tener mas de 7 caracteres',
            state: !!errors.username,
            title: 'Nombre de usuario',
            value: register('username', {
              required: 'Este Campo es requerido',
              pattern: /^\w{7,}$/,
            }),
            placeholder: '',
          }}
        />
        <InputPersonal
          {...{
            type: 'text',
            message: errors.fullName?.message || 'Debe ser solo letras',
            state: !!errors.fullName,
            title: 'Nombre',
            value: register('fullName', {
              required: 'Este Campo es requerido',
              pattern: /^[A-Za-z]{3,30}( [A-Za-z]{3,30})*$/,
            }),
            placeholder: '',
          }}
        />

        <InputPersonal
          message={errors.lastname?.message || 'Debe ser solo letras'}
          {...{
            state: !!errors.lastname,
            title: 'Apellidos',
            value: register('lastname', {
              required: 'Este Campo es requerido',
              pattern: /^[A-Za-z]{3,30}( [A-Za-z]{3,30})*$/,
            }),
            placeholder: '',
            type: 'text',
          }}
        />
        <InputSelect
          {...{
            message: errors.phone?.message || 'Debe ser mayor a 9 y menor a 10',
            state: !!errors.phone,
            title: 'Telefono',
            value: register('phone', {
              required: 'Este Campo es requerido',
              pattern: /^\d{9,17}$/,
            }),
            placeholder: '',
            pais: country,
            onSelectOnchange(value) {
              setCountry(value)
            },
          }}
        />

        <InputPersonal
          {...{
            message: errors.email?.message || 'Email no correcto',
            state: !!errors.email,
            title: 'Email',
            value: register('email', {
              required: 'Este Campo es requerido',
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }),
            placeholder: '',
            type: 'email',
          }}
        />

        <InputPersonal
          {...{
            message: errors.birth_date?.message,
            state: !!errors.birth_date,
            title: 'Fecha de Nacimiento',
            value: register('birth_date', {
              required: 'Este Campo es requerido',
              validate: validateFecha,
            }),
            placeholder: '',
            type: 'date',
          }}
        />
        <button className="flex w-full items-center justify-between rounded-lg bg-blue-500 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring  focus:ring-blue-300/50">
          <span>Registrar </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </>
  )
}
