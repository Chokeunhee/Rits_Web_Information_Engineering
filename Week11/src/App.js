import { useEffect, useState } from "react";
import io from 'socket.io-client';
import './style.css';
const socket = io('http://localhost:4000')

// function APP
function App() {
  // setting basic const
  const [msg, setMsg] = useState('')
  const [user, setUser] = useState('')
  const [chat, setChat] = useState([])


  // function useEffect (Sending  MSG)
  useEffect(() => {
    socket.on('msg', myData => {
      setChat([...chat, myData])
    })
  })

  // send (when send is acted do the following)
  // print user and msg on the console
  // emit the data
  // set user and  msg to ''
  const send = (e) => {
    e.preventDefault();
    console.log(user,msg)
    socket.emit('msg', { user, msg })
    setUser('')
    setMsg('')

  };
  return (

    <div className = "BOX">  

    <div className="App">

      <h1> HELLO CHAT :) </h1>   
      <form onSubmit={send}>
      
      <div className= "USERBOX" /*USER NAME BOX*/>  
        <input type="text"
          required
          placeholder='user...'
          name="user"
          value={user}
          onChange={(e) => { setUser(e.target.value) }}
        ></input>
      </div> 
   
      <div className="MSGBOX" /*MSG BOX*/> 
        <input type="text"
          required
          placeholder='msg...'
          name="msg"
          value={msg}
          onChange={(e) => { setMsg(e.target.value) }}
        ></input> 
      </div>

      <button type='submit' className="Send" /*Submit button*/>
        Send
      </button>
      </form>
      </div> 
      
      <div className="CHAT">  
      <div /*Showing the sended chat*/>
        {
          chat.map((myData, index) => {
            return (
              <p key={index}>
                <span>{myData.user} : {myData.msg}</span>
              </p>
            )
          }
          )
        }
    </div> 
    </div>
    </div>
  );
}
export default App;