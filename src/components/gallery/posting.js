export default function Posting(props) {
let info = props.data
    return (
        <div>
            <h3>{info.title}</h3>
            <h3>{info.description}</h3>
            <h3>{info.price}</h3>
            <img src={info.imageURL} alt="the item"></img>
        </div>
    )
}