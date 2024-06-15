import Link from 'next/link'

const LoginScreen = ({}) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold text-gray-700 dark:text-white">Marca</h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300">Inicia sesión para acceder a tu cuenta</p>
      </div>

      <div className="mt-8">
        <form>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
              Dirección de correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ejemplo@ejemplo.com"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
            />
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between">
              <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                Contraseña
              </label>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-500 hover:underline focus:text-blue-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu contraseña"
              className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
            />
          </div>

          <div className="mt-6">
            <button className="w-full rounded-md bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          ¿No tienes una cuenta?{' '}
          <Link href="/auth/register" className="text-blue-500 hover:underline focus:underline focus:outline-none">
            Regístrate
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default LoginScreen
