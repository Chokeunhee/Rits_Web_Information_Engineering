import React from 'react'; //import react
import post from "./posts.json"; //import posts.json as post

//function APP
function App(){
  
  // define POST as the following 
  const POST = post.map(id => <p><h1>Title : {id.title}</h1><h3>Body : {id.body}</h3></p>)
  
  //return function App as the following format POST
  return(<div>{POST}</div>)
}

export default App;