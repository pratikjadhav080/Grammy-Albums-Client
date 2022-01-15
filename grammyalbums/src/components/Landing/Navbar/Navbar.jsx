import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../Store/AuthStore/action';
import styles from "./Navbar.module.css"

export const Navbar = () => {

    const dispatch = useDispatch();
    const [genres, setGenre] = useState([])
    const { isAuth } = useSelector(store => store)

    const logout = () => {
        dispatch(logoutUser())
    }

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
        })}

        <div>
            <Link to="/artistlogin">
                <h1>{isAuth ? "Artist Panel" : "Artist Login"}</h1>
            </Link>
        </div>

        <div>
            {isAuth ? <button className={styles.btn} onClick={logout}>LOGOUT</button> : ""}
        </div>
    </div >
}