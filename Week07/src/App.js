import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Quote from './quote';



function APP() {

  const [count1,setcount1] = useState(0)
  const [count2,setcount2] = useState(0)
  const [count3,setcount3] = useState(0)
  const [count4,setcount4] = useState(0)

  function add1(){setcount1(count1 => count1 + 1)}
  function subtract1(){setcount1(count1 => count1 - 1)}

  function add2(){setcount2(count2 => count2 + 1)}
  function subtract2(){setcount2(count2 => count2 - 1)}

  function add3(){setcount3(count3 => count3 + 1)}
  function subtract3(){setcount3(count3 => count3 - 1)}

  function add4(){setcount4(count4 => count4 + 1)}
  function subtract4(){setcount4(count4 => count4 - 1)}

  return(
    <body>
    <div class="quotations">
      <h1>Quotes about Dream</h1>
      <div class ="q1">
      <Quote name="Ashley Smith" text="&quot;Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.&quot;" />
      
      <p class ="count">
        <button onClick={subtract1}>Dislike</button>
        {count1}
        <button onClick={add1}>Like</button>
      </p>
      </div>
      
      <div class ="q2">
      <Quote name="C.S.Lewis" text="&quot;You are never too old to set another goal or to dream a new dream.&quot;"/>
      <p class ="count">
        <button onClick={subtract2}>Dislike</button>
        {count2}
        <button onClick={add2}>Like</button>
      </p>
      </div>
      
      <div class ="q3">
      <Quote name="Mark Twain" text="&quot;Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.&quot;" />
      <p class ="count">
        <button onClick={subtract3}>Dislike</button>
        {count3}
        <button onClick={add3}>Like</button>
      </p>
      </div>
      
      <div class ="q4">
      <Quote name="Martin Luther King Jr." text="&quot;You don’t have to see the whole staircase, just take the first step.&quot;" />
      <p class ="count">
        <button onClick={subtract4}>Dislike</button>
        {count4}
        <button onClick={add4}>Like</button>
      </p>
      </div>

    </div>
    </body>
  );
}

ReactDOM.render(
  <APP />, 
  document.getElementById('root')
);

export default APP;