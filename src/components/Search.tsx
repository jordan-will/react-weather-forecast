import { useState } from "react";

export const Search = ({ setCityName }: any) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="m-search">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="m-search__input"
        type="text"
        placeholder="Search by city name" />
      <button onClick={() => setCityName(inputValue)} className="m-search__btn">Search</button>
    </div >
  )
}