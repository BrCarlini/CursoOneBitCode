export default function Game({title, coverImage, onRemove}) {
    return (
        <div>
            <img src={coverImage} alt="" />
            <h2>{title}</h2>
            <button onClick={onRemove}>Remover</button>
        </div>
    )
}