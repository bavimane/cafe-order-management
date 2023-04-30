const SearchForm = ({ search, handleChange }) => {
  return (
    <input
      type="text"
      placeholder="enter the name"
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchForm;
