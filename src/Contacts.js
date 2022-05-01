import React, {Component}from "react";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "",
      message: "",
      terms: false,
      test: ""
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
      <div className="Contacts">
        <h2><i><center>
        Contacts</center></i>
        </h2>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Contact Name</label>
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
                  <label className="label">Any Other Questions?</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.terms}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.test === "Yes"}
                      />
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.test === "No"}
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
                  <p>Contact Name: {this.state.fullname}</p>
                  <p>Questions: {this.state.message}</p>
                 
                  <p>Do you test?: {this.state.test}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contacts