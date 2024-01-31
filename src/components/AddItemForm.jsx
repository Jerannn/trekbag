import { useState } from "react";
import Button from "./Button";

export default function AddItemForm({setItems}) {

  const [item, setItem] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newItem = {
      id: Date.now(),
      name: item,
      packed: false,
    }
    setItems((prevItems) => [...prevItems, newItem]);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input value={item} onChange={(e) => setItem(e.target.value)}/>
      <Button>Add to lis</Button>
    </form>
  );
}
