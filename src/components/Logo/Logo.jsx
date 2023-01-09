import "./style.css";
import logoSrc from "./logo.svg";



function Logo({className}) {
  return (
    <a href="/" className={className ? className : "logo"}>
      <img src={logoSrc} alt="Логотип компании" className="logo__pic"/>
    </a>
  )
}


export default Logo;
