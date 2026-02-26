import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import data from "./components/data.js"


export default function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })

    return (
      <>
          <Header />
          <main className="container">
            {entryElements}
          </main>
          
      </>
    )
}