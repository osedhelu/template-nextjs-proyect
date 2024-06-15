import { atom } from 'nanostores'

interface Props {
  text: string
  status: 'success' | 'error' | 'warning' | 'info'
}

export const $storeToast = atom<Props[]>([])
export const showToast = ({ status, text }: Props) => {
  $storeToast.set([...$storeToast.get(), { status, text }])
}
// Función para eliminar un toast por su índice
export const removeToastByIndex = (index: number) => {
  $storeToast.set($storeToast.get().filter((_, i) => i !== index))
}

// Función para eliminar el toast más antiguo
export const removeOldestToast = () => {
  const currentToasts = $storeToast.get()
  if (currentToasts.length > 0) {
    $storeToast.set(currentToasts.slice(1))
  }
}
