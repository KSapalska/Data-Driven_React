
import Contact from "./components/Contact"
import mrWhiskerson from "./assets/felix.png"
import fluffykins from "./assets/mr-whiskerson.png"
import felix from "./assets/pumpkin.png"
import pumpkin from "./assets/felix.png"

function App() {
    return (
        <div className="contacts">
            <Contact
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={fluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={felix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img= {pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App 


/* import Joke from "./components/Joke.jsx";


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

 */