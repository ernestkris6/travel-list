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
        setItems((items)=> [...items, item])
    }

    function handleDeleteItems(id){
        setItems(items.filter((item)=> item.id !== id))
    }

    function handleToggleItem(id){
        setItems(items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleClearList(){
        setItems([])
    }

    return(
        <div>
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearItems={handleClearList}/>
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

function PackingList({items, onDeleteItems, onToggleItems, onClearItems}){
    
        const [sortBy, setSortBy] = useState('input');

        let sortedItems;

        if(sortBy === 'input') sortedItems = items;

        if(sortBy === 'description') sortedItems = items.slice().sort((a, b)=> a.description.localeCompare(b.description));

        if(sortBy === 'packed' ) sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));



    return (
        <div className="list">
            <ul className="list">
            {sortedItems.map((item)=> (
                <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} onClearItems={onClearItems} />
            ))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                    <option value='input'>SORT BY INPUT ORDER</option>
                    <option value='description'>SORT BY DESCRIPTION</option>
                    <option value='packed'>SORT BY PACKED</option>
                </select>
                <button onClick={onClearItems}>CLEAR LIST</button>
            </div>
        </div>
        
    )
}

function Item({item, onDeleteItems, onToggleItems}){
    return (
        <li>
            <input type="checkbox" 
            value={item.packed} 
            onChange={()=> onToggleItems(item.id)}
            />
            <span style={item.packed ? {textDecoration : "line-through"} : {textDecoration: "none"}}>
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
          
           <p>💼<em>You have X items on your list, 
            and you already packed X (X%)</em>💼</p>
           
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