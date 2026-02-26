import Joke from "./Joke.jsx"

export default function App () {
  return (
    <main>
      <Joke 
        setup="How do you get the code for the bank vault?"
        punchline="You checkout their branch."
        />
      <Joke 
        setup="What do you call a busy waiter?"
        punchline="A server."
        />
      <Joke 
        setup="What diet did the ghost developer go on?"
        punchline="Boolean"
        />
      <Joke 
        setup="Why was the developer unhappy at their job?"
        punchline="They wanted arrays."
        />
      <Joke 
        setup="Why did 10 get paid less than '10'?"
        punchline="There was workplace inequality."
        />
    </main>
  )
}
