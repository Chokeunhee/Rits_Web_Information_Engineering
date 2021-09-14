import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Quote from './quote';



function Quotation() {
  return(
    <body>
    <div class="quotations">
      <h1>Quotes about Dream</h1>
      <div class ="q1">
      <Quote name="Ashley Smith" text="&quot;Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.&quot;" />
      </div>
      <div class ="q2">
      <Quote name="C.S.Lewis" text="&quot;You are never too old to set another goal or to dream a new dream.&quot;"/>
      </div>
      <div class ="q3">
      <Quote name="Mark Twain" text="&quot;Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.&quot;" />
      </div>
      <div class ="q4">
      <Quote name="Martin Luther King Jr." text="&quot;You don’t have to see the whole staircase, just take the first step.&quot;" />
      </div>
      <div class ="q5">
      <Quote name="Oprah Winfrey" text="&quot;The key to realizing a dream is to focus not on success but significance – and then even the small steps and little victories along your path will take on greater meaning.&quot;" />
      </div>
    </div>
    </body>
  );
}

ReactDOM.render(
  <Quotation />, 
  document.getElementById('root')
);

export default Quotation;