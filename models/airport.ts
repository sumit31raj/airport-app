import airports from '../data/airports.json'
import Airport from '../types/airport'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return airports.find(airport => airport.iata === iata.toUpperCase())
}

export const allAirports = async (): Promise<Airport[]> => {
  return airports
}

export const findAirportByKeys = async (value: string, key: string): Promise<Airport[]> => {
  return airports.filter(airports => airports[key].toUpperCase().includes(value.toUpperCase()))
}
