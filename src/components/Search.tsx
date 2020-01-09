import React from 'react';

interface SearchProps{
    simulateAPICalls(e: React.ChangeEvent<HTMLInputElement>): void
}

const Search = (props: SearchProps) => {
    return (
        <div className="search-bar">
            <input type="text" onChange={props.simulateAPICalls} />
        </div>
    );
};

export default Search;