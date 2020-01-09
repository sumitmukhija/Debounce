import React from 'react';

interface StatCardProps{
    val: number,
    text: string
}

const StatCard = (props: StatCardProps) => {
    return (
        <div className="debounced">
            <div className="stat-text">{props.val}</div>
            <div className="api">{props.text}</div>
        </div>
    )
}

export default StatCard;