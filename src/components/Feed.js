import React, {Fragment} from 'react';


/**
 * Feed-Store-UI for the ES client-pusher
 */
class Feed extends React.Component{

    /**
     * Renders the Component
     */
    render(){
        return (
            <Fragment>
                <div className="flex align-center">
                    <div className="flex__item / small-6 large-3">
                        <h1 className="h2">
                            RSS-Feed speichern </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        <button className="button prim">Seite jetzt speichern!</button>
                    </div>
                    <div className="flex__item / small-6 large-3">
                        <div className="feed">
                            <div className="feed__content">
                                <div className="feed__item">
                                    <h2 className="h6">RSS-Item Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun ... </p>
                                </div>
                                <div className="feed__item">
                                    <h2 className="h6">RSS-Item Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun ... </p>
                                </div>
                                <div className="feed__item">
                                    <h2 className="h6">RSS-Item Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun ... </p>
                                </div>
                            </div>
                            {/*<button className="button small">mehr Artikel zeigen</button>*/}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Feed;