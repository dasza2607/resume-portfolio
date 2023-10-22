import img from "../img/projects/img_title.png"

function Title(){
    return(
        <header className="header">
        <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, I'm <em>Daryna</em></strong><br />
           Junior frontend developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
            <img src={img} alt="" />
        </div>
    </div>
    </header>
    )
}

export default Title