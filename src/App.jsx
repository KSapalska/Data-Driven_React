/* import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

export default function App(){
    return (
        <>
        <Header />
        <Entry />
        <Entry />
        </>
    )
} */

  /*   import Contact from "./components/Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./src/assets/felix.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./src/assets/mr-whiskerson.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./src/assets/pumpkin.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./src/assets/felix.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App */


import Joke from "./components/Joke.jsx";


export default function App() {
    return (
        <main>
            <Joke
                punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={10}
                isPun={true}
                comments={[
                    {author: "", text: "", title: ""},
                    {author: "", text: "", title: ""}]}
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                isPun={true}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                isPun={true}
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                isPun={false}
            />
        </main>
    )
}

