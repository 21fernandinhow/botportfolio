import { Fragment } from "react";
import Game from "./jokenpo-play";

export function Jokenpo (props) {

    return (
        <Fragment>
            <div className="jokenpo">
                <p>🤖 My master Fernando is allways creating new features for me. For example, he teached me how to play Rock - Paper - Scissors. Let's play?</p>
                <h3>Choose your option:</h3>
                <Game 
                    text="I play"
                    win="🤖 YEEEES! I Won! If you want a revange, choose another option"
                    tie="🤖 It's a tie! Let's play again! Choose another option..."
                    lost="🤖 Ok, you won. Congratulations. Choose another option to play again"
                />
            </div>
            <div className="menu">
                <button className='menu-btn' onClick={props.about}>Tired of playing this. Let's talk about your creator</button>
                <button className='menu-btn' onClick={props.projects}>Ok, cool. Show me the Projects again</button>
                <button className='menu-btn' onClick={props.contact}>It's enough. I will contact him</button>
            </div>
        </Fragment>
    )

}

export function PortugueseJokenpo (props) {

    return (
        <Fragment>
            <div className="jokenpo">
                <p>🤖 Meu mestre Fernando está sempre criando novas funcionalidades para mim. Por exemplo, ele me ensinou a jogar Pedra, Papel e Tesoura.
                    Vamos jogar?
                </p>
                <h3>Escolha pedra, papel ou tesoura:</h3>
                <Game 
                    text="Eu escolho:"
                    win="🤖 UHUUUUL! Eu ganhei! Se quiser revanche, escolha uma opção novamente."
                    tie="🤖 Empate! Vamos jogar de novo. Escolha uma opção novamente..."
                    lost="🤖 Tá bem, você venceu. Parabéns. Escolha uma opção para jogar de novo."
                />
            </div>
            <div className="menu">
                <button className='menu-btn' onClick={props.about}>Cansei de jogar, me conte mais sobre o Fernando.</button>
                <button className='menu-btn' onClick={props.projects}>Ok, legal. Agora me conte sobre os projetos.</button>
                <button className='menu-btn' onClick={props.contact}>Já ta bom, quero falar com o Fernando</button>
            </div>
        </Fragment>
    )
}