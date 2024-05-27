import React, { useState } from "react";
import './index.css';
//Map
//Filter
//Sorting
// const initialItems = [
//     {
//         "id" : 1,
//         "description" : "Socks",
//         "packed" : false,
//         "quantity" : 5
//     },
//     {
//         "id" : 2,
//         "description" : "Charger",
//         "packed" : true,
//         "quantity" : 2
//     },
//     {
//         "id" : 3,
//         "description" : "Passport",
//         "packed" : true,
//         "quantity" : 1

//     },
// ]

const App = () =>{
    const [items, setItems] = useState([]);

    function handleAddItems(item){
        setItems((items) => [...items, item]);
    }

    function handleDeleteItems(id){
        setItems(items.filter((item)=> item.id !== id))
    }

    return(
        <div>
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItems={handleDeleteItems}/>
            <Stats />
        </div>
        
    )

};


function Logo(){
    return <h1> 🏝 FAR AWAY 💼 </h1>
}


function Form({onAddItems}){
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("1");
   

    function handleSubmit(e){
        e.preventDefault();

        const newItem = {description, id:Date.now(), packed:false, quantity}

        if(!description) return;

        onAddItems(newItem);
        console.log(newItem);
        
        setDescription("");
        setQuantity(1);
        
    }


    return(
        <div className="add-form">
            
            <form onSubmit={handleSubmit}>
            <span>What do you need for your 😍 trip?</span>
                <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
                   {Array.from({length:20}, (_, i) => i + 1).map((num) =>
                    <option value={num} key={num}>{num}</option>
                )}
                </select>
                <input 
                type="text" 
                placeholder="item..." 
                value={description}
                onChange={(e)=>
                setDescription(e.target.value)}
                    
                />
                <button>ADD</button>
            </form>
        </div>
    )
}

function PackingList({items, onDeleteItems}){
    return (
        <ul className="list">
            {items.map((item)=> (
                <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
            ))}
        </ul>
    )
}

function Item({item, onDeleteItems}){
    return (
        <li>
            <span style={item.packed ? {textDecoration : "line-through"} : {}}>
            {item.quantity}
            {" "}
            {item.description}
            </span>
            <button onClick={()=> onDeleteItems(item.id)}>❌</button>
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