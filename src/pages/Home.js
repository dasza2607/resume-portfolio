import Header from "../components/header/header.js"


function Home(){
    return(
        <>
        <Header />
    <main className="section">
        <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, ReactJS, HTML, CSS, BootStrap5 </p>
                        <p>Vue.js, jQuery, MySQL</p>
                    </li>
                </ul>
        </div>
    </main>
    </>
    )
}

export default Home