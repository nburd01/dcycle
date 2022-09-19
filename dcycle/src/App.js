import { Agify } from "./components/Agify/Agify";
import CovidData from "./components/Covid/CovidData";
import { Gender } from "./components/Gender/Gender";
import GenderList from "./components/GenderList/GenderList";
import { Name } from "./components/Name/Name";
import { Nationalize } from "./components/Nationalize/Nationalize";
import "./style/style.module.css"

function App() {
  return (
    <main>
      <section>
        <div className="container">
        <Name />
        </div>
        <div className="container">
        <Gender />
        </div>
        <div className="container">
        <Nationalize/>
        </div>
        <div className="container">
        <Agify/>
        </div>
      </section>
      <section>
        <GenderList />
      </section>
      <section>
        <CovidData/>
      </section>
    </main>
  );
}

export default App;
