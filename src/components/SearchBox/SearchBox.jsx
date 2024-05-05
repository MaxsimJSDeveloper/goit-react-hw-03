const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
