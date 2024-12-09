export default function Joke(props) {
  console.log(props) 
  return (
      
      <div>
      
        <h2>{props.setup}</h2>
        <p>{props.punchline}</p>
        <hr />
      </div>
    );
  }
