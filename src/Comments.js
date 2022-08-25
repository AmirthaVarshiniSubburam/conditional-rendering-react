import React, { useState } from 'react'
import axios from 'axios';

function Comments() {

    //setting up base url derive from terminal
    const api = axios.create({
        baseURL:`http://localhost:3000/comments`
        
    })

    //to get all the comments
    let refreshComments = () =>{
        api.get(`/`).then(res=>{
            setComments((comments)=>res.data)
            console.log(comments);
        })
    }

    let postButton = () => {
        let newaddComment = {
            "user": user,
            "message": newComment
          }

        api.post(`/`, newaddComment)
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
        refreshComments()
    }

    const [comments, setComments] = useState([])
    const [user, setUser] = useState('')
    const [newComment, setNewComment] = useState('anonymous')

    let usernameadded =(event)=> {
        setUser(event.target.value)
        console.log(user);
    }

    let commentAdded = (event) => {
        setNewComment(event.target.value)
        console.log(newComment);
    }
  
return (
    <div>
        <h1>Comments</h1>
        <input onChange={usernameadded} type="text" placeholder='Type your username' /> <br /> <br />
        <input onChange={commentAdded} type="text" placeholder='Type your comment' style={{height: "80px"}} /> <br /> <br />
        <button onClick={postButton}>Post</button>
        <button onClick={refreshComments}>View all Comments</button>
        <br />
        <br />
        <center>
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Comments</th>
                </tr>
                </thead>
                <tbody>
                    {
                    comments.map((comments)=>(
                        
                        <tr key={comments.id}>
                        
                        <td>{comments.user} </td>
                        <td>{comments.message}</td>
                        
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Comments