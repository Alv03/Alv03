import React, { useState } from 'react'

const Contacts = () => {
    const [state, setState] = useState({
        editor: "",
        message: "",
        terms: false,
        test: ""
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
    <div> <div className="Contacts">
    <h2><i><center>
    Contacts</center></i>
    </h2>
    <div className="container">
      <div className="columns">
        <div className="column is-9">
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Contact Name</label>
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
              <label className="label">Any Other Questions?</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    name="terms"
                    type="checkbox"
                    checked={state.terms}
                    onChange={handleChange}
                  />
                  I agree to the{" "}
                  <a href="https://google.com">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="label">
                  Did you test before asing Questions?
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="test"
                    onChange={handleChange}
                    value="Yes"
                    checked={state.test === "Yes"}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="test"
                    onChange={handleChange}
                    value="No"
                    checked={state.test === "No"}
                  />
                  No
                </label>
              </div>
            </div>

           
          </form>
        </div>
        <div className="column is-3">
          <pre>
            <code>
              <p>Contact Name: {state.fullname}</p>
              <p>Questions: {state.message}</p>
             
              <p>Do you test?: {state.test}</p>
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Contacts