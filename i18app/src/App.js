import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  let name="Sana Siddiqui";
  let {t} = useTranslation();
  return (
    <div className="App">
      <LanguageSwitcher></LanguageSwitcher>
      <h3> {t("good_morning")}</h3>
      <div>{t("welcome", {name: name})}</div>
    </div>
  );
}

export default App;
