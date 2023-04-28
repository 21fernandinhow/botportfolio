import { Fragment, useState } from "react";

function Game (props) {

    let [result, setResult] = useState('');
    let [charlieChoose, setCharlieChoose] = useState(0);

    const gameIcons = ['❓', '🪨', '📄', '✂️']
    
    //1 rock, 2 paper, 3 scissors

    const playGame = (playerChoose) => {
        setCharlieChoose(charlieChoose = parseInt(Math.random()*3+1))
        if(charlieChoose === playerChoose){
            setResult(props.tie); // Draw
        } else if (charlieChoose === 1 && playerChoose === 3){
            setResult(props.win); //Rock wins scissors
        } else if (charlieChoose === 1 && playerChoose === 2){
            setResult(props.lost); //Rock lost to paper
        } else if (charlieChoose === 2 && playerChoose === 1){
            setResult(props.win); //Paper wins Rock
        } else if (charlieChoose === 2 && playerChoose === 3){
            setResult(props.lost); //Paper lost to Scissors
        } else if (charlieChoose === 3 && playerChoose === 2){
            setResult(props.win); //Scissors wins Paper
        } else if (charlieChoose === 3 && playerChoose === 1){
            setResult(props.lost); //Scissors lost to Rock
        };
    };

    return (
        <Fragment>
            <div className="options">
                <h4 onClick={()=>playGame(1)}> 🪨 </h4> 
                <h4 onClick={()=>playGame(2)}> 📄 </h4> 
                <h4 onClick={()=>playGame(3)}> ✂️ </h4>
            </div>
        
            <h3> {props.text} {gameIcons[charlieChoose]}</h3>
            <h4>{result}</h4>
        </Fragment>
    )

}

export default Game;