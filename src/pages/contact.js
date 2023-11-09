import React from "react";
import Menu from "../component/menu";
import { Link, useNavigate } from "react-router-dom";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Contactus = () => {
  const history = useNavigate();
  const handleRedirect = () => {
    history("/aboutus");
  };
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1>
        {t("welcome")} {t("contact")} || Akshay {t("holiday")} Developer
      </h1>
      <input />
      <button onClick={handleRedirect}>Submit</button>
      <br />
      <br />
      <Link to="/Fromstore">
        <button type="button" class="btn btn-primary">
          FormStore
        </button>
      </Link>
      &nbsp; &nbsp;
      <Link to="/">
        <button type="button" class="btn btn-primary">
          Subdomain
        </button>
      </Link>
    </div>
  );
};
export default Contactus;
