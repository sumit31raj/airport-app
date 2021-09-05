import { NextPage } from 'next'
import Link from 'next/link'
import { useState, useCallback } from "react"
import debounce from "lodash/debounce"

import Layout from '../components/layout'
import useGetApi from '../hooks/use-get-api'
import Airport from '../types/airport'
import { searchOptions } from '../constants'
import Dropdown from '../components/Dropdown'
import InputText from '../components/Inputtext'


const Page: NextPage = () => {
  const [searchKey, setSearchkey] = useState(searchOptions[0].label);
  const [searchText, setSearchText] = useState('');
  const [airports, getSearchedAirports] = useGetApi<Airport[]>([]);


  const onOptionSelect = (item) => {
    setSearchkey(item.label)
  }

  const onChange = (e) => {
    const { value } = e.target
    setSearchText(value)
    getAirportList(searchKey, value)
  }

  const getSearchResults = (key, value) => {
    getSearchedAirports(`/api/airports?${key.toLowerCase()}=${value}`);
  };

  const getAirportList = useCallback(
    debounce(getSearchResults, 500),
    []
  );


  return <Layout>
    <h1 className='text-2xl font-bold'>Code Challenge: Airports</h1>

    <div className="p-2 mt-5 relative table leading-normal text-sm box-border w-full border-separate text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none">
      <Dropdown
        options={searchOptions}
        value={searchKey}
        onOptionSelect={onOptionSelect}
      />
      <InputText
        value={searchText}
        onChange={onChange}
        placeHolder="Search...."
      />
    </div>


    <div>
      {airports.map(airport => (
        <Link href={`/airports/${airport.iata.toLowerCase()}`} key={airport.iata}>
          <a className='flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none'>
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className='ml-auto text-gray-500'>
              {airport.country}
            </span>
          </a>
        </Link>
      ))}
      {(airports.length === 0 && !!searchText) && (
        <div className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none">
        <span>
          No Airports found for the searched content
        </span>
      </div>
      )}
    </div>
  </Layout>
}

export default Page
