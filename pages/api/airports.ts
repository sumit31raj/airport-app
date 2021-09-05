import { NextApiRequest, NextApiResponse } from 'next'
import isEmpty from 'lodash/isEmpty'

import { allAirports, findAirportByKeys } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req

  let airports = []
  
  if (isEmpty(query)) {
    airports = await allAirports()
  } else {
    const key = Object.keys(query)[0]
    const value = query[key] as string

    airports = await findAirportByKeys(key, value)
  }
  
  res.status(200).json(airports)
}
