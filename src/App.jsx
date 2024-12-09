
import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry 
                img= 
                {{
                    src: "https://scrimba.com/links/travel-journal-japan-image-url",
                    alt: "Mount Fuji"
                }}
                   title = "Mount Fuji"
                   country = "Japan" 
                   googleMapsLink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                   dates = "12 Jan, 2021 - 24 Jan, 2021"
                   text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
                
            </main>
        </>
    )
}






/* import Contact from "./components/Contact"
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

 */
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