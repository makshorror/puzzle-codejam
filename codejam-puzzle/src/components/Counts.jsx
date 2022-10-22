import React from 'react';

let moves = 0;

let time = '00:00'

const Counts = () => {
    return (
        <div>
            <div className="counts">
                <p className="moves">
                    Moves: {moves}
                </p>
                <p className="time">
                    Time: {time}
                </p>
            </div>
        </div>
    );
};

export default Counts;