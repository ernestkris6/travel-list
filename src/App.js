import React from "react";
import Joke from "./Joke";

import JokeData from "./JokeData";


//Map
//Filter
//Sorting

const App = () =>{

    const jokes = JokeData.map(joke => {
        return <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id}/>
    })

    return(
        <div>
           {jokes}
        </div>
    );
};

export default App;