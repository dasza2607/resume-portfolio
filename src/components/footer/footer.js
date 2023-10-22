import "./style.css"
import gitHub from "../../img/icons/gitHub.svg"
import linkedl from "../../img/icons/linkedin.svg"

function Footer(){
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://github.com/dasza2607"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/daryna-shmorhun-087205205/"><img src={linkedl} alt="Link" /></a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer