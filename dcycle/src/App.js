import { Gender } from "./components/Gender/Gender";
import GenderList from "./components/GenderList/GenderList";
import { Name } from "./components/Name/Name";
import { Nationalize } from "./components/Nationalize/Nationalize";


function App() {
  return (
    <main>
      <section>
        <Name />
        <Gender />
        <Nationalize/>
      </section>
      <section>
        <GenderList />
      </section>
    </main>
  );
}

export default App;
