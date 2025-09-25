export const Search = () =>{
  return (
    <div className="m-search">
      <input 
        className="m-search__input"
        type="text" 
        placeholder="Search by city name" />
      <button className="m-search__btn">Search</button>
    </div>
  )
}