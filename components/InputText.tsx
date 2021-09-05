interface Props {
  onChange: (any) => void;
  value: string;
  placeHolder: string;
}  

const InputText: React.FC<Props> = ({ placeHolder, onChange, value }) => {
  return (
    <input
      type="text"
      className="focus:outline-none p-2 w-5/6 table-cell"
      placeholder={placeHolder ? placeHolder : "Search here..."}
      onChange={onChange}
      value={value}
    />
  )
}

export default InputText