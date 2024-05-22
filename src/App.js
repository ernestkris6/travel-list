import React from "react";
import './index.css';
//Map
//Filter
//Sorting
const initialItems = [
    {
        "id" : 1,
        "description" : "Socks",
        "packed" : false,
        "quantity" : 3
    },
    {
        "id" : 2,
        "description" : "Charger",
        "packed" : false,
        "quantity" : 3
    },
    {
        "id" : 3,
        "description" : "Passport",
        "packed" : true,
        "quantity" : 3

    },
]

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
    return <h1> 🏝 FAR AWAY 💼 </h1>
}
function Form(){
    function handleSubmit(e){
        e.preventDefault()
    }
    return(
        <div className="add-form">
            
            <form onSubmit={handleSubmit}>
            <span>What do you need for your 😍 trip?</span>
                <select>
                   {Array.from({length:20}, (_, i) => i + 1).map((num) =>
                    <option value={num} key={num}>{num}</option>
                )}
                </select>
                <input type="text" placeholder="item..." />
                <button>ADD</button>
            </form>
        </div>
    )
}

function PackingList(){
    return (
        <ul className="list">
            {initialItems.map((item)=> (
                <Item item={item} key={item.id}/>
            ))}
        </ul>
    )
}

function Item({item}){
    return (
        <li>
            {item.packed ? (<span  
            style={{textDecoration : "line-through"}}>
                {item.description}
                {item.quantity}
                </span>) : null 
                }
            <button>&times;</button>
        </li>
    )
}

function Stats(){
    return(
        <footer className="stats">
           <em>
           <p>You have X items on your list, 
            and you already packed X (X%)</p>
           </em>
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