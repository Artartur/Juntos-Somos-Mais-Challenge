import { IoMdSearch } from "react-icons/io";
import "../styles/search.scss";
interface ISearch {
  onChange: EventInput;
  value: string;
}

export default function Search({ onChange, value }: ISearch) {
  return (
    <div className="search__container">
      <IoMdSearch size={20} color="black"/>
      <input
        className="search__container-input"
        name="search"
        placeholder="Search here"
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
