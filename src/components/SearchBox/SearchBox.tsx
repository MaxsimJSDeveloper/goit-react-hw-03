import css from "./SearchBox.module.css";
import { SearchBoxProps } from "./SearchBox.types";

const SearchBox: React.FC<SearchBoxProps> = ({ value, onFilter }) => {
  return (
    <div className={css.searchBoxContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onFilter(e.target.value)
        }
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
