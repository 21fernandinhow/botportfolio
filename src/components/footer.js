import curriculo from "../curriculo.pdf"
import resume from "../resume.pdf"

function Footer (props) {
    if(props.language === 'pt-br'){
        return(
            <footer id="footer">
                <a className="cv" href={curriculo} target="_blank" rel="noopener noreferrer">Baixar Currículo</a>
            </footer>
        )
    } else {
        return(    
        <footer id="footer">
            <a className="cv" href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
        </footer>
        )
    }
}

export default Footer;