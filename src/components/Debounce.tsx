import React, { Component } from 'react';
import Concept from './Concept';
import Search from './Search';
import Stats from './Stats';


enum Approach {
    WITHOUT_DEBOUNCE = 0,
    WITH_DEBOUNCE
}
export default class Debounce extends Component{

    state = {
        "WITHOUT_DEBOUNCE": 0,
        "WITH_DEBOUNCE": 0
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Concept />
                <Search simulateAPICalls={this.simulateAPICalls} />
                <Stats WITH_DEBOUNCE={this.state.WITH_DEBOUNCE} WITHOUT_DEBOUNCE={this.state.WITHOUT_DEBOUNCE} />
            </div>
        );   
    }

    // Utility functions
    makeAPICall = (a: Approach) => {
        let update = {};
        if (a === Approach.WITHOUT_DEBOUNCE) {
            this.setState({
                'WITHOUT_DEBOUNCE': this.state.WITHOUT_DEBOUNCE + 1
            });
        }
        else {
            this.setState({
                'WITH_DEBOUNCE': this.state.WITH_DEBOUNCE + 1
            });
        }
    }

    withoutDebounce = () => {
        this.makeAPICall(Approach.WITHOUT_DEBOUNCE);
    }

    withDebounce = (func: Function, after: number) => {
        let timer: any;
        return function () {
            clearTimeout(timer);
            const context = this;
            const args = arguments;
            timer = setTimeout(() => { func.apply(context, args) }, after);
        }
    }

    deb = this.withDebounce(() => this.makeAPICall(Approach.WITH_DEBOUNCE), 300);

    simulateAPICalls = () => {
        this.withoutDebounce();
        this.deb();
    }

};