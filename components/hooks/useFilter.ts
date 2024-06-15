import { useState } from 'react'

export type FilterFunction<T> = (item: T, filter: string) => boolean

const useFilter = <T>(initialArray: T[], filterFunction: FilterFunction<T>) => {
  const [filteredArray, setFilteredArray] = useState<T[]>(initialArray)

  const handleFilterChange = (filterValue: string) => {
    const filteredData = initialArray.filter((item) => filterFunction(item, filterValue))
    setFilteredArray(filteredData)
  }

  return [filteredArray, handleFilterChange] as const
}

export default useFilter
