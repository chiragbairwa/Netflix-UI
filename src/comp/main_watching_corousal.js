import witcher from "../img/witcher.jpg";

export default function cards(props) {
    const cardCss = {
        padding: "0",
        width: '170px',
        fontSize: "12pt",
        overflow: 'hidden',
        margin: '0 20px 0 0',
        borderRadius: '20px',
        backgroundColor: '#fff',
    }
    return (
        <div style={cardCss}>
            <img src={witcher} width="100%" height="70%" alt={props.title} />
            <h5 style={{
                margin: '0 0 0 10px',
            }}>{props.title}</h5>
        </div>
    )
}