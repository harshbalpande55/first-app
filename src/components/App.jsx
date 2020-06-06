import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";




function App() {
  return (
    <div>
      <Header />
      {notes.map( function(con){
  return(<Note
    key={con.id}
    head ={con.title}
    cont = {con.content}
    />);})}
      <Footer />
    </div>
  );
}

export default App;
