import React, {useState} from 'react';

alert('Привет, Уважаемый Проверяющий! Я не успел еще доделать работу, Прошу пожалуйста проверь через 2 дня(26 октября вечером). Спасибо огромное за понимание! Если что связь: ТГ: @makshorror Или Discord: gangbang69#2015')

let id = 16;

let gemArr = [];

let style = {gridTemplateColumns: '1fr 1fr 1fr 1fr'}

let fontSize = {fontSize: '50px'}

let anim = {}

createRandom(id)

function createRandom(x){
    gemArr = []
    while (gemArr.length < x) {
        let random = Math.floor(Math.random()*x)
        if(gemArr.indexOf(random) > -1) continue;
        gemArr[gemArr.length] = random;

    }
    let index = gemArr.indexOf(0)
    gemArr.splice(index, 1, '')
}

function Game (){

    const createBlocks = () => {
        let items = [];
        for(let i=0;i< gemArr.length;i++){

            if (gemArr[i] === ''){
                items.push(<div key={gemArr[i]} className={'empty'} id={'empty'}>{gemArr[i]}</div>)
            } else {
                items.push(<div key={gemArr[i]} id={gemArr[i]} className={'gem'} style={fontSize} onClick={gemMove}>{gemArr[i]}</div>)
            }
        }
        return items
    }

    function gemMove(e){


        let emptyIndex = gemArr.indexOf('')
        let elem = parseInt(e.target.id,10)
        let index = gemArr.indexOf(elem)
        win()
        if (gemArr[index - 1] === '' || gemArr[index + 1] === '' || gemArr[index - Math.sqrt(id)] === '' || gemArr[index + Math.sqrt(id)] === ''){

            [gemArr[index], gemArr[emptyIndex]] = [gemArr[emptyIndex], gemArr[index]];
            [gems[index], gems[emptyIndex]] = [gems[emptyIndex], gems[index]];

            setMoves(moves += 1)


        }




    }

    function win(){
        const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, '', 15]
        if (gemArr === sorted){
            alert('Win')
        } else {
            console.log(gemArr)
        }

    }

    let [stopBtn, setStop] = useState('stop')
    let [moves, setMoves] = useState(0);
    let [sizes, setSize] = useState('4x4');
    let [gems, setGems] = useState(null)
    let [run, setRun] = useState('00:00')
    let min = 0;
    let sec = 0;
    let move = 0;
    const interval = React.useRef(null);
    // 'Choose Frame Size and click "Shuffle and start"! And Good Luck :)'

    function stop(){
        clearInterval(interval.current)
        interval.current = null;
        setStop(stopBtn = 'stop')
        let info = 'Your time: ' + run +  '\nYour move: ' + moves
        setGems(gems = info)
    }
    function x3(){
        setSize(sizes = '3x3')
        id = 3 * 3;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr'}
    }
    function x4(){
        setSize(sizes = '4x4')
        id = 4 * 4;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr 1fr'}
    }
    function x5(){
        setSize(sizes = '5x5')
        id = 5 * 5;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'}
    }
    function x6(){
        setSize(sizes = '6x6')
        id = 6 * 6;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'}

    }
    function x7(){
        setSize(sizes = '7x7')
        id = 7 * 7;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
        fontSize = {fontSize: '40px'}
    }
    function x8(){
        setSize(sizes = '8x8')
        id = 8 * 8;
        createRandom(id)
        style={gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
        fontSize = {fontSize: '30px'}
    }

function shuffle(){
    if (id === 9){
        x3()
    }
    if (id === 16){
        x4()
    }
    if (id === 25){
        x5()
    }
    if (id === 36){
        x6()
    }
    if (id === 49){
        x7()
    }
    if (id === 64){
        x8()
    }
    clearInterval(interval.current)
    interval.current = null;
    setMoves(moves = 0)
    anim = {animation: 'none'}
    setStop(stopBtn = 'stopActive')
    setGems(gems = createBlocks())
    interval.current = setInterval(()=>{
        sec += 1;
        if (sec === 60){
            sec = 0;
            min += 1;
        }
        if (sec < 10 && min < 10){
            setRun(run = '0' + min + ':0' + sec)
        } else if ((sec >= 10 && min < 10)){
            setRun(run = '0' + min + ':' + sec)
        } else if((sec >= 10 && min >= 10)){
            setRun(run = min + ':' + sec)
        }
    }, 1000)
}



    return (
        <div>
            <div className="buttons-container">
                <div className="btn-wrapper">
                    <button id="shuffle" style={anim} onClick={shuffle}>
                        Shuffle and start
                    </button>
                    <button id={stopBtn} onClick={stop}>
                        Stop
                    </button>
                    <button id="save">
                        Save
                    </button>
                    <button id="result">
                        Result
                    </button>
                </div>
            </div>

            <div className="counts">
                <p className="moves">
                    Moves: {moves}
                </p>
                <p className="time">
                    Time: {run}
                </p>
            </div>

            <div className="gem-wrapper">
                <div className="gems" style={style}>
                    {gems}
                </div>

            </div>

            <p className="size" id="frameSize">
                Frame size: {sizes}
            </p>

            <div className="other-size">
                <p>Other size:</p>
                <div className="btnSize">
                    <button id="x3" className="xBtn" value="3x3" onClick={x3}>3x3</button>
                    <button id="x4" className="xBtn" value="4x4" onClick={x4}>4x4</button>
                    <button id="x5" className="xBtn" value="5x5" onClick={x5}>5x5</button>
                    <button id="x6" className="xBtn" value="6x6" onClick={x6}>6x6</button>
                    <button id="x7" className="xBtn" value="7x7" onClick={x7}>7x7</button>
                    <button id="x8" className="xBtn" value="8x8" onClick={x8}>8x8</button>
                </div>
            </div>
        </div>
    );
}

export default Game;