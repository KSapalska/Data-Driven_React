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
        <>
        <Joke 
        setup= "I got my daughter a fridge for her birthday."
        punchline= "I can't wait to see her face light up when she opens it."
    
        />


<Joke 
        setup= "How did the hacker escape the police?"
        punchline= "He just ransomware!"
        />

<Joke 
        setup= "Why don't pirates travel on mountain roads?"
        punchline= "Scurvy."
        />
        
        </>
    )
}
