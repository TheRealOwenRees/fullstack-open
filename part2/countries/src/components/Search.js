const Search = ({ countryFilter, setCountryFilter }) => {
    return (
        <div>
            <label>find countries</label><input type="text" onChange={(e) => setCountryFilter(e.target.value)} value={countryFilter}></input>
        </div>
    )
}

export default Search