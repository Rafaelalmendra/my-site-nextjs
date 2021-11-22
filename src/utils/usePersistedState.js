import { useState, useEffect } from 'react'

export function usePersistedState(key, initialState) {
  const storageValue = localStorage.getItem('key')
  const [state, setState] = useState(() => {
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}