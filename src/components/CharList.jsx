import { useEffect, useState } from 'react'
import Char from './Char'

function NavApi(props) {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <p>Page : {props.nav}</p>
            <button className='btn btn-light btn-sm'
                onClick={() => {
                    props.setNav(props.nav + 1);
                }}
            >Next Page: {props.nav + 1}
            </button>
        </header>
    )
}

function CharList() {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nav, setNav] = useState(1);

    useEffect(() => {
        async function resApi() {
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${nav}`);
            const info = await res.json();
            setLoading(false);
            setChars(info.results);
        }

        resApi();
    }, [nav]);

    return (
        <div className='container'>

            <NavApi nav={nav} setNav={setNav}/>

            {
                loading ? (
                    <h1>Loading</h1>
                ) :
                    (
                        <div className='row'>
                            {
                                chars.map((char) => {
                                    return (
                                        <div className='col-md-4' key={char.id}>
                                            <Char char={char} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
            }
            <NavApi nav={nav} setNav={setNav}/>
        </div>
    );
}

export default CharList