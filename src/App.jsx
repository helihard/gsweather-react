import { useState, useEffect } from "react"
import "./css/styles.css"
import "./css/text-styles.css"
import Headline from "./components/Headline"
import Introduction from "./components/Introduction"
import TemperatureList from "./components/TemperatureList"
import Description from "./components/Description"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchOpenData() {
      try {
        const openDataLink =
          "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/89230/period/latest-months/data.json"
        const response = await fetch(openDataLink)
        const result = await response.json()
        const allValues = result.value

        const thisYearsValues = allValues.filter((hourValue) => {
          if (hourValue.date >= 1704063600000) {
            return true
          } else {
            return false
          }
        })

        const formattedValues = thisYearsValues.map((hourValue) => {
          return {
            timestamp: hourValue.date,
            temp: parseFloat(hourValue.value).toFixed(1),
          }
        })

        setData(formattedValues)
      } catch (error) {
        console.error("API-data kunde inte hämtas")
      }
    }

    fetchOpenData()
  }, [])

  return (
    <>
      <header>
        <Headline />
      </header>
      <main>
        <Introduction latestUpdate={data[data.length - 1]} />
        <TemperatureList data={data} />
      </main>
      <footer>
        <Description />
      </footer>
    </>
  )
}

export default App
