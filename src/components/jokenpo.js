import { Fragment, useState } from "react";

function Jokenpo (props) {

    let [result, setResult] = useState('');
    let [charlieChoose, setCharlieChoose] = useState(0);
    //1 rock, 2 paper, 3 scissors

    const gameIcons = ['❓', '🪨', '📄', '✂️']

    const playGame = (playerChoose) => {
        setCharlieChoose(charlieChoose = parseInt(Math.random()*3+1))
        if(charlieChoose === playerChoose){
            setResult(`🤖 We draw! Let's play again! Choose another option...`); // Draw
        } else if (charlieChoose === 1 && playerChoose === 3){
            setResult(`🤖 YEEEEAH! I Won! If you want a revange, choose another option`); //Rock wins scissors
        } else if (charlieChoose === 1 && playerChoose === 2){
            setResult(`🤖 Ok, you won. Congratulations. Choose another option to play again`); //Rock lost to paper
        } else if (charlieChoose === 2 && playerChoose === 1){
            setResult(`🤖 YEEEEAH! I Won! If you want a revange, choose another option`); //Paper wins Rock
        } else if (charlieChoose === 2 && playerChoose === 3){
            setResult(`🤖 Ok, you won. Congratulations. Choose another option to play again`); //Paper lost to Scissors
        } else if (charlieChoose === 3 && playerChoose === 2){
            setResult(`🤖 YEEEEAH! I Won! If you want a revange, choose another option`); //Scissors wins Paper
        } else if (charlieChoose === 3 && playerChoose === 1){
            setResult(`🤖 Ok, you won. Congratulations. Choose another option to play again`); //Scissors lost to Rock
        };
    };

    return (
        <Fragment>
            <div className="jokenpo">
                <p>🤖 My master Fernando is allways creating new features for me. For example, he teached me how to play Rock - Paper - Scissors. Let's play?</p>
                <h3>Choose your option:</h3>
                <div className="options">
                    <h4 onClick={()=>playGame(1)}> 🪨 </h4> 
                    <h4 onClick={()=>playGame(2)}> 📄 </h4> 
                    <h4 onClick={()=>playGame(3)}>✂️</h4>
                </div>
                <h3>I play: {gameIcons[charlieChoose]}</h3>
                <h4>{result}</h4>
            </div>
            <div className="menu">
                <button className='menu-btn' onClick={props.about}>Tired of playing this. Let's talk about Fernando</button>
                <button className='menu-btn' onClick={props.projects}>Ok, cool. Show me the Projects again</button>
                <button className='menu-btn' onClick={props.contact}>It's enough. I will contact Fernando</button>
            </div>
        </Fragment>
    )

}

export default Jokenpo;