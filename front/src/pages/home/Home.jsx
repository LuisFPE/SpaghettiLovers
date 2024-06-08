import "./Home.scss"
import Banner from "../../assets/img/banner.jpeg";
import Updates from "../../components/news/updates.jsx";

const Home = ()=>{
    
    return (
        <section>
            <img id="home-banner" src={Banner} alt="" />
            <h1 id="home-title">Spaghetti Lovers </h1>
            <article id="home-body">
                <h2 id="home-subtitle">Noticias:</h2>
                <div>
                    <Updates/>                 
                </div>
            </article>
            <footer id="home-footer">
                <h3>Al usar este sitio aceptas los términos de uso y nuestra política de privacidad. SpaghettiLovers®. Creador Luis Padua </h3>
            </footer>
        </section>
    )
}

export default Home;