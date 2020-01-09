import React from 'react';

const Concept = () => {
    return (
        <div className="explainer">
            <div className="title-txt">Debounce</div>
            <div className="txt">
                <span className="long-text">Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. 
                <br /><br /></span> 
                <div className="short">Assume that the input below is a search bar on an e-commerce website. Typing a character fires a query. Try using the search bar to see how debouncing helps.</div>
            </div>
        </div>);
};

export default Concept;