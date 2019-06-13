import React, {Fragment} from 'react';


/**
 * Success message
 */
class Success extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            url: props.url
        };
    }

    /**
     * Displays the success message, and redirects to the url after two seconds
     * @param props
     */
    componentDidMount(){
        if (this.state.url){
            setTimeout(()=>{
                // @todo redirect back to the origin url
                console.log('redirect-now to: ' + this.state.url);
            }, 2000)
        }
    }

    /**
     * Renders the Component
     */
    render(){
        return (
            <Fragment>
                <div className="success-message">
                    <div className="success-message__content">
                        Inhalte erfolgreich gespeichert!
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Success;