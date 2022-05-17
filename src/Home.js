import React, { useState } from 'react'

import { Link } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState({
    fullname: "",
    emailaddress: "",
    password: "", 
    editor:"",
  })
   function handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        setState({
            ...state,
          [name]: value
        });
      }
    
     function handleSubmit(event) {
        event.preventDefault();
        console.log(state);
      }
  return (
    <div>     <div className="Home">
    <h2><i><center>Forms in React</center></i></h2>

  <div className="container">
      <div className="columns">
        <div className="column is-9">
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="fullname"
                  value={state.fullname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  name="emailaddress"
                  value={state.emailaddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Pick your editor</label>
              <div className="control">
                <div className="select">
                  <select
                    value={state.editor}
                    name="editor"
                    onChange={handleChange}
                  >
                    <option value="vscode">VsCode</option>
                    <option value="atom">Atom</option>
                    <option value="atom">Sublime text</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                  <Link to='/About'>
                <input
                  type="submit"
                  value="Submit"
                  className="button is-primary"
                />
                </Link>
              </div>
            </div>
          </form>
        
        </div>
        <div className="column is-3">
          <pre>
            <code>
              <p>Full Name: {state.fullname}</p>
              <p>Email Address: {state.emailaddress}</p>
              <p>Password: {state.password}</p>
              <p>Choice in Editor: {state.editor}</p>
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Home