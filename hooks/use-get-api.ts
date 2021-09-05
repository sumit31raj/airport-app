import axios from "axios"
import { useState } from "react"

export const useGetApi = <T>(defaultValue: any): [any, (path: string) => void] => {
  const [ data, setData ] = useState<T>(defaultValue)

  const getData = (path: string) => {
    axios.get<T>(path).catch(err => err.response).then(response => {
      setData(response.data)
    })
  }

  return [data, getData]
}

export default useGetApi
