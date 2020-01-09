import React from 'react';
import StatCard from './StatCard';

interface StatsProps{
    WITH_DEBOUNCE: number,
    WITHOUT_DEBOUNCE: number
}

const Stats = (props: StatsProps) => {
    return (
        <div className="stats">
            <StatCard val={props.WITH_DEBOUNCE} text="API calls using debouncing" />
            <StatCard val={props.WITHOUT_DEBOUNCE} text="API calls without debouncing" />
        </div>
    );
}

export default Stats;