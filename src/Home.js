import React, {Component}from "react";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      emailaddress: "",
      password: "", 
      editor:"",
    }; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="Home">
        <h2><i><center>Forms in React</center></i></h2>
  
      <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
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
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
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
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Pick your editor</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.editor}
                        name="editor"
                        onChange={this.handleChange}
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
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {this.state.fullname}</p>
                  <p>Email Address: {this.state.emailaddress}</p>
                  <p>Password: {this.state.password}</p>
                  <p>Choice in Editor: {this.state.editor}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home