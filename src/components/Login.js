import React, {Fragment} from 'react';

/**
 * Login form
 */
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            callback: props.callback,
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Update the local form state
     * @param field field to update
     * @param e event triggered on the change
     */
    handleChange(field, e){
        this.setState({
            [field]: e.target.value
        });
    }

    /**
     * Handles the form submit button
     */
    handleSubmit(){
        // @todo Make request to api and retrieve the JWT
        if (this.state.callback){
            this.state.callback('JWT-token------------');
        }
    }

    /**
     * Renders the component
     */
    render(){
        return (
          <Fragment>
              <div className="login-form">
                  <div className="field">
                      <label htmlFor="email">E-Mail</label>
                      <input type="email" id="email" onChange={(e)=>this.handleChange('email',e)} />
                  </div>
                  <div className="field">
                      <label htmlFor="password">E-Mail</label>
                      <input type="password" id="password" onChange={(e)=>this.handleChange('password',e)} />
                  </div>
                  <button className="button prim" onClick={this.handleSubmit}>Jetzt einloggen</button>
              </div>
          </Fragment>
        );
    }
}

export default Login;