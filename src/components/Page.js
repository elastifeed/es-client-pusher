import React, {Fragment} from 'react';
import $ from 'jquery';
import 'select2';

import Image from './Image';

/**
 * Page-Store-UI for the ES client-pusher
 */
class Page extends React.Component{

    /**
     * Creates the react component and builds all refs
     * for later hooking of jquery components
     * @param props
     */
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            url: props.data.url,
            screenshot: props.data.screenshot,
            cats: [],
            tags: [],
            success: props.success
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handles the submit event
     */
    handleSubmit(){
        // @todo push the url into the es collector application
        const data = {
            url: this.state.url,
            cats: this.state.cats,
            tags: this.state.tags
        };
        console.log(data);
        this.state.success(this.state.url);
    }

    /**
     * Update the local form state
     * @param field field to update
     * @param e event triggered on the change
     */
    handleChange(field, e){
        this.setState({
            [field]: $(e.target).val()
        });
    }

    /**
     * Action called after the component was mounted and rendered
     */
    componentDidMount(){
        // Apply select2 on component mount
        if (this.wrapper.current) {
            const self = this;
            $(this.wrapper.current).find('.select2-select').each(function (){
                const current = $(this);
                const options = {};
                options.placeholder = current.data('placeholder');
                if (current.hasClass('select2-select--tags')) {
                    options.tags = true;
                    options.tokenSeparators = [',', ' '];
                    options.closeOnSelect = false;
                }
                current.select2(options);
                current.on('change', e => self.handleChange(current.data('field'), e));
            });
        }
    }

    /**
     * Renders the React component
     */
    render(){
        return (
            <Fragment>
                <div className="flex align-center" ref={this.wrapper}>
                    <div className="flex__item / small-6 large-3">
                        <h1 className="h2">
                            Seite speichern </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        <div className="field">
                            <label htmlFor="cat-select">
                                Kategorien
                            </label>
                            <select data-placeholder="Kategorien auswählen..." id="cat-select" className="select2-select" name="categories[]" multiple="multiple" data-field="cats">
                                {/* @todo request cats from API */}
                                <option>Cat 1</option>
                                <option>Cat 2</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="tag-select">
                                Tags
                            </label>
                            <select data-placeholder="Tags eingeben..." id="tag-select" className="select2-select select2-select--tags" name="tags[]" multiple="multiple" data-field="tags"/>
                        </div>
                        <button className="button prim" onClick={this.handleSubmit}>Seite jetzt speichern!</button>
                    </div>
                    <div className="flex__item / small-6 large-3">
                        <Image url={this.state.screenshot}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Page;