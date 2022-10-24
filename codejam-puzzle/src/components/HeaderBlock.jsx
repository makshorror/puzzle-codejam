import React from 'react';
import favIco from '../assets/img/favIco.png'

const HeaderBlock = () => {
    return (
        <div>
            <header className="header">
                <img className={'logo'}
                     alt={"logo"}
                     src={favIco}/>
                    <h1>Gem Puzzle</h1>
            </header>
        </div>
    );
};

export default HeaderBlock;