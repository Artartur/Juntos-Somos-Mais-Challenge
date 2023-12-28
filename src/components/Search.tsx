import "../styles/search.scss";
import { IoMdSearch } from "react-icons/io";
interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Search({ onChange, value }: ISearch) {
  return (
    <div className="search__container">
      <IoMdSearch size={20} />
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
