import "./style.css"

function Header(){
    return(
        <header className="header">
        <div className="header__wrapper">
        <h1 className="header__title">
        You can find more information about me in my resume
        </h1><br></br>
        <a href="https://docs.google.com/document/d/1GvqdfPYHT372bIvmi0MpGfipokNXC9Yw063Sx7mDh0o/edit?usp=sharing" className="btn">Download CV</a>
    </div>
    </header>
    )
}

export default Header
