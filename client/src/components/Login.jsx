import {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button>
        </form>
    )
    }
    
    export default Login






// import React from 'react';
// import { useState, useRef, useEffect, useContext  } from 'react'
// import { Link } from'react-router-dom'
// import AuthContext from './AuthProvider.jsx';
// import axios from 'axios';
// const LOGIN_URL = 'http://localhost:3001/api/login';
//  // from https://mdbootstrap.com/docs/react/extended/login-form/ 

// const Login = () => {
//   const { setAuth } = useContext(AuthContext);
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg('')
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(LOGIN_URL, {
//         username: user,
//         password: pwd,
//       });
//       console.log(res.data);
//       setAuth({user, pwd})
//       setUser('');
//       setPwd('');
//       setSuccess(true);
//     } catch (err) {
//       if(!err?.response) {
//         setErrMsg('Invalid username or password');
//       }
     
//     }
//   }

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>You are logged in</h1>
//           <br />
//           <p> 
//             <Link to="/">Home</Link>
//           </p>
//         </section>
//       ) : (
        
//     <div>
//       <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//       <h1>Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input 
//           type="text" 
//           id="username" 
//           ref={userRef} 
//           value={user} 
//           onChange={(e) => setUser(e.target.value)} 
//           required/>

//         <label htmlFor="password">Password</label>
//         <input 
//           type="password" 
//           id="password" 
//           value={pwd} 
//           onChange={(e) => setPwd(e.target.value)} 
//           required/>   

//           <button type="submit">Log In</button>     
//       </form>
     
//     </div>
//       )}
//       </>
//     )
//   }

//   export default Login






