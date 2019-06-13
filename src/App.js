import React from 'react';
import Request from './js/Request';

// Components
import Login from './components/Login';
import Page from './components/Page';
import Feed from './components/Feed';
import Success from './components/Success';

class App extends React.Component{
    constructor(props){
        super(props);

        // @todo retrieve the token from local storage and test, if it is still valid
        this.state = {
            jwt: false,
            request: new Request('%url%'),
            success: false
        };
        this.loginUser = this.loginUser.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    /**
     * Handles the push success
     */
    handleSuccess(){
        this.setState({success: true});
    }

    /**
     * Handles the Login callback passed to the login component
     * and updates the jwt token
     * @param token jwt auth token
     */
    loginUser(token){
        this.setState({jwt: token});
        // @todo save the token to the local storage
    }

    /**
     * Routes the application to the appropriate component
     */
    getEntryPoint(){
        if (!this.state.jwt) {
            return <Login callback={this.loginUser}/>;
        }

        if (this.state.success){
            return <Success url={this.state.success} />
        }

        const request = this.state.request;
        if (request.type === 'page') {
            return <Page data={request.data} success={this.handleSuccess}/>
        }
        return <Feed data={request.data} success={this.handleSuccess}/>
    }

    /**
     * Renders the main application component
     */
    render(){
        return (
            <div className="wrapper">
                <div className="wrapper__content">
                    {this.getEntryPoint()}
                </div>
            </div>
        );
    }
}

export default App;
