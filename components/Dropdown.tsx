import { useState } from "react"

interface Props {
  options: { label: string; value: string }[];
  onOptionSelect: (string) => void;
  value: string;
}  

const Dropdown: React.FC<Props> = ({ options, onOptionSelect, value }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const optionClicked = (e) => {
    const { id } = e.target
    toggleDropdown()
    onOptionSelect(options[parseInt(id, 10)])
  }

  return (
    <div className="py-2 bg-white justify-content px-4 focus:outline-none w-1/6 inline-block">
      <button
        onClick={toggleDropdown}
        className="w-full text-left flex justify-between items-center"
      >
        {value || 'Select..'}
        <svg className="fill-current h-4 w-4 inline mr-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      {showDropdown && (
        <div className="bg-white left-0 border border-gray-200 absolute rounded-lg shadow-xl py-2 w-48 mt-2.5 cursor-pointer">
          {options.map((item, index) => (
            <div
              className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              key={index}
              id={`${index}`}
              onClick={optionClicked}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown