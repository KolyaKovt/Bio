import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key))

    if (localValue) return localValue
    return defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
