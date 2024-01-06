import Logo from "../assets/whiteLogo.svg";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__container-logo">
        <img src={Logo} alt="juntos somos mais logo" />
        <p>Juntos Somos Mais Fidelizacao S.A.</p>
      </div>
      <div className="footer__container-social">
        <p>Siga-nos nas redes sociais:</p>
        <ul>
          <li>
            <GrFacebookOption color="white" size={24} />
          </li>
          <li>
            <GrLinkedinOption color="white" size={24} />
          </li>
          <li>
            <GrInstagram color="white" size={24} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
