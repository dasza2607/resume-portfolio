import iconGithub from "./gitHub-black.svg"
import "./style.css"


function BtnGitHub (props){
    return(
        <div>
        <a href={props.gitHubLink} target="blank" rel="noreferrer" className="btn-outline">
        <img src={iconGithub} alt="icin GItHub" />GitHub repositories</a>
        </div>

    )
}

export default BtnGitHub