import Logo from "../assets/logo.svg";
import Search from "./Search";
import "../styles/header.scss";

interface IHeader {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Header({ onChange, value }: IHeader) {
  return (
    <header className="header__container">
      <div>
        <img src={Logo} alt="juntos somos mais logo" />
      </div>
      <Search onChange={onChange} value={value} />
      <div className="header__container-left">
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
