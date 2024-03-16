import "./css/styles.css"
import "./css/text-styles.css"
import Headline from "./components/Headline"
//import Introduction from "./components/Introduction"
//import Buttons from "./components/Buttons"
import TemperatureList from "./components/TemperatureList"
import Description from "./components/Description"

function App() {
  return (
    <>
      <header>
        <Headline />
      </header>
      <main>
        <TemperatureList />
      </main>
      <footer>
        <Description />
      </footer>
    </>
  )
}

export default App
