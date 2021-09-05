import axios from "axios"
import { useState } from "react"

export const useGetApi = <T>(path: string, defaultValue: any): [any, () => void] => {
  const [ data, setData ] = useState<T>(defaultValue)

  const getData = () => {
    axios.get<T>(path).catch(err => err.response).then(response => {
      setData(response.data)
    })
  }

  return [data, getData]
}

export default useGetApi
