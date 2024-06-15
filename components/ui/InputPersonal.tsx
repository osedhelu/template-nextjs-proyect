import { DataPaises, type iCountry } from '@/utils/paises'
import { Suspense, useEffect, useRef, useState, type FC, type HTMLInputTypeAttribute } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'
import { ButtonLoading } from '../hooks/ButtonLoading'
import { Loading } from '../hooks/Loading'
import type { FilterFunction } from '../hooks/useFilter'
import useFilter from '../hooks/useFilter'

interface props {
  type: HTMLInputTypeAttribute | undefined | 'select'
  placeholder: string
  title: string
  value: UseFormRegisterReturn<'fullName' | 'lastname' | 'email' | 'username' | 'birth_date'>
  message: string | unknown // Ajusta el tipo específico necesario o crea una interfaz para manejar este mensaje
  state: boolean
}

export const InputPersonal: FC<props> = ({ message = 'Error', state, title, value, placeholder, type }) => {
  const error1Color = state ? 'text-red-700 dark:text-red-500' : 'text-black dark:text-white'
  const error2Color = state
    ? 'dark:bg-red-100 dark:border-red-400 focus:ring-red-500 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 bg-red-50'
    : 'text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400/40'
  return (
    <Suspense fallback={<ButtonLoading />}>
      <div>
        <label className={`mb-2 block text-sm font-medium  ${error1Color}`}>{title}</label>
        <input
          type={type}
          {...value}
          id="username-error"
          className={`mt-2 block w-full rounded-lg px-5 py-3 ring-teal-400/40 focus:outline-none focus:ring  ${error2Color}`}
          placeholder={placeholder}
        />
        {state && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {`${message}`}!
          </p>
        )}
      </div>
    </Suspense>
  )
}

interface propsSelect {
  state: boolean
  title: string
  message: string | unknown // Ajusta el tipo específico necesario o crea una interfaz para manejar este mensaje
  pais: iCountry
  value: UseFormRegisterReturn<'phone'>
  placeholder: string
  onSelectOnchange: (value: iCountry) => void // Específica el tipo de parámetro y retorno de la función
}

export const InputSelect: FC<propsSelect> = ({ state, title, pais, onSelectOnchange, value, message }) => {
  const componentRef = useRef<HTMLDivElement | null>(null)

  const [stateDrow, setStateDrow] = useState(false)
  const removeAccents = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const filterFunction: FilterFunction<iCountry> = (country, filterValue) => {
    const normalizedFilter = removeAccents(filterValue.toLowerCase())
    const normalizedNameEs = removeAccents(country.name_es.toLowerCase())
    const normalizedNameEn = removeAccents(country.name_en.toLowerCase())

    return normalizedNameEs.includes(normalizedFilter) || normalizedNameEn.includes(normalizedFilter)
  }

  const [filteredCountries, handleFilterChange] = useFilter(DataPaises, filterFunction)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value
    handleFilterChange(filterValue)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setStateDrow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const error1Color = state ? 'text-red-700 dark:text-red-500' : 'text-black dark:text-white'
  const error2Color = state
    ? 'dark:bg-red-100 dark:border-red-400 focus:ring-red-500 border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 bg-red-50'
    : 'text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400/40'
  return (
    <Loading>
      <div>
        <label className={`mb-2 block text-sm font-medium ${error1Color}`}>{title}</label>
        <div className="flex">
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              setStateDrow(!stateDrow)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setStateDrow(!stateDrow)
            }}
            className={`mt-1 inline-flex cursor-pointer items-center rounded-l-md border  border-r-0  px-5 py-1  text-3xl   ${error2Color}`}
          >
            {pais.emoji}
          </div>
          <div
            className={`mt-1 inline-flex cursor-pointer items-center border border-x-0  p-1  text-xl ${error2Color}`}
          >
            {pais.dial_code}
          </div>
          <input
            type="text"
            {...value}
            className={`mt-1 block w-full  min-w-0 flex-1  rounded-none  rounded-r-lg border  border-l-0 px-5 py-1  focus:outline-none focus:ring focus:ring-zinc-800/40  ${error2Color}`}
            placeholder="xxx xxx xx"
          />
        </div>
        <div
          ref={componentRef}
          className={`z-10 ${
            !stateDrow ? 'hidden' : 'block'
          } absolute h-56 w-[19rem] divide-y divide-gray-100 overflow-auto rounded-lg bg-white shadow dark:bg-gray-700`}
        >
          <div className="sticky top-0 w-full items-center justify-center text-center ">
            <input
              className="block  w-full rounded-b-none rounded-t-2xl border border-b-0 border-gray-300  bg-gray-50 p-1  text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Buscar"
              onChange={handleInputChange}
            />
          </div>

          <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {filteredCountries.map((pa: iCountry) => (
              <li key={pa.code_2}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setStateDrow(!stateDrow)
                    onSelectOnchange(pa)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setStateDrow(!stateDrow)
                      onSelectOnchange(pa)
                    }
                  }}
                  className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <i className="text-center text-3xl">{pa.emoji}</i>
                  <span className="ml-3 text-center text-base">{pa.name_es}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {state && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {`${message}`}!
          </p>
        )}
      </div>
    </Loading>
  )
}
