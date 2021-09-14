import { useState } from "react";

const NewPost = () => {

    const [title, SetTitle] = useState('');
    const [body, SetMsg] = useState('');
    const [userId, SetID] = useState('1');

    const Submition = (e) => {
        e.preventDefault();
        const postobj = {userId,title,body};

        fetch('http://localhost:9999/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:  JSON.stringify(postobj)
        }).then(()=>{
            console.log('New post added sucessfully');
        })
    }

    return (
        <div>
            <h2>Add a New Post</h2>

            <form  onSubmit={Submition}>
                <label className="LABLE">ID:</label>
                <select
                    value={userId}
                    onChange={(e)=>SetID(e.target.value)}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>

                <label className="LABLE">Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => SetTitle(e.target.value)}
                />

                <label  className="LABLE">Message:</label>
                <textarea className="msgbox"
                    required
                    value={body}
                    onChange={(e) => SetMsg(e.target.value)}
                >
                </textarea>
                
                <button> Submit </button>


            </form>
        
        
        </div>
    );
}
export default NewPost;
