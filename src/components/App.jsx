import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { initialItems } from "./constants";

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items}/>
        <SideBar setItems={setItems}/>
      </main>

      <Footer />
    </>
  );
}
