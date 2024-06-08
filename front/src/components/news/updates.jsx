import "./Updates.scss";
import New from "./new";

const Updates = ()=>{

    return (
        <section id="show-news">

            
            <New data={{ title: '1 Vista de Moviles', date: '6/6/2024', info: 'Oficialmente la pagina principal de spaghettis lover cuenta con una vista para moviles' }}/>
            <New data={{ title: 'Vista Principal', date: '5/6/2024', info: 'Oficialmente la pagina principal de spaghettis lover cuenta con estilos' }}/>
            <New data={{ title: 'Abre la Version Beta', date: '4/6/2024', info: 'Oficialmente la version beta de spaghettis lover es abierta al público' }}/>
        
        </section>
    )
}
export default Updates;