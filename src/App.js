import React from "react";
import './index.css';
//Map
//Filter
//Sorting

const App = () =>{

    return(
        <div>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
        
    )

};


function Logo(){
    return <h1>🏝 FAR AWAY 💼</h1>
}
function Form(){
    return(
        <div className="add-form">
            
            <form>
            <span>What do you need for your 😍 trip?</span>
                <select>
                    <option>1</option>
                </select>
                <input type="text" placeholder="item..." />
                <button>ADD</button>
            </form>
        </div>
    )
}

function PackingList(){
    return (
        <div className="list">
            <p>Socks</p>
        </div>
    )
}

function Stats(){
    return(
        <footer className="stats">
            
        </footer>
    )
}
export default App;









































// import Joke from "./Joke";

// import JokeData from "./JokeData";


// const jokes = JokeData.map(joke => {
//     return <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id}/>
// })

// return(
//     <div>
//        {jokes}
//     </div>