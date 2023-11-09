import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
const Home = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <Languageoption onChange={(e) => handleClick(e)} />
      <h1>
        {t("welcome")} || {t("channel")}{" "}
      </h1>
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
export default Home;
