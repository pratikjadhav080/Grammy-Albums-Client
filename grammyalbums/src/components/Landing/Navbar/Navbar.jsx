import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

export const Navbar = () => {

    const [genres, setGenre] = useState([])

    useEffect(() => {
        fetchGenres()
    }, [])

    const fetchGenres = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/genres`, { withCredentials: true })
            .then(res => {
                // console.log("data", res.data)
                setGenre(res.data)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }


    return <div className={styles.mainNavbar}>
        <div>
            <Link to="/">
                <img src="/images/grammyicon.svg" alt="" />
            </Link>
        </div>
        <div>
            <Link to="/showAlbums/all">
                <h1>All</h1>
            </Link>
        </div>
        {genres.map((e) => {
            return <div key={e._id}>
                <Link to={`/showAlbums/${e._id}`}>
                    <h1>{e.genrename}</h1>
                </Link>
            </div>
        })

        }
    </div >
}