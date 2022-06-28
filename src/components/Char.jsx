function Char({ char }) {
    return (
        <div className="text-center p-5">
            <h3>{char.name}</h3>
            <img className="img-fluid rounded-pill" src={char.image} alt={char.name} />
            <h4>
                Status: {char.status}
            </h4>
            <h4>
                Origin: {char.origin.name}
            </h4>
            <h4>
                Location: {char.location.name}
            </h4>
        </div>
    )
}

export default Char 