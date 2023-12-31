import Logo from "../assets/logo.svg";
import Search from "./Search";
import "../styles/header.scss";

interface IHeader {
  onChange: EventInput;
  value: string;
}

export default function Header({ onChange, value }: IHeader) {
  return (
    <header className="header__container">
      <div>
        <img src={Logo} alt="juntos somos mais logo" />
      </div>
      <div className="header__container-left">
        <Search onChange={onChange} value={value} />
        <div className="header__container-left-button"></div>
        <div className="header__container-left-button"></div>
      </div>
    </header>
  );
}
