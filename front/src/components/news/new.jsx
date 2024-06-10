import "./New.scss";

const New = ({data})=>{

    return (
        <article className="new-body">
            <h2 >{data.date}</h2>
            <h3 >{data.title}</h3>
            <p >{data.info}</p>
        </article>
    )
}
export default New;