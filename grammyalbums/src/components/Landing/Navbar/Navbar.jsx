import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../Store/AuthStore/action';
import styles from "./Navbar.module.css"

export const Navbar = () => {

    let timerID;
    const dispatch = useDispatch();
    const [genres, setGenre] = useState([])
    const [list, setList] = useState([])
    const [flag, setFlag] = useState(false)
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
                setGenre(res.data)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    function debounce(func, search, delay) {

        if (search.length < 3) {
            return false;
        }

        if (timerID) {
            clearTimeout(timerID)
        }

        timerID = setTimeout(() => {
            func(search)
        }, delay)

    }

    const searchAlbums = (search) => {

        if (search) {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/albums/searchbyname?search=${search}`, { withCredentials: true })
                .then(res => {
                    
                    setList(res.data)

                    if (document.getElementById("searchid").value.length < 3) {
                        setFlag(false);
                    } else {
                        setFlag(true)
                    }
                })
                .catch(err => {
                    console.log("Error", err);
                })
        }
    }

    const albumDetails = () =>{
        document.getElementById("searchid").value=""
        setFlag(false)
    }

    return <div className={styles.mainNavbar}>
        <div>
            <Link to="/">
                <img src="/images/grammyicon.svg" alt="" />
            </Link>
        </div>

        <div className={styles.searchbox}>

            <input id="searchid" onChange={(e) => debounce(searchAlbums, e.target.value, 1000)} placeholder='search' />

            {flag ? <div className={styles.dataresult}>
                {list.map((e) => {
                    return <Link onClick={albumDetails} className={styles.dataItem} key={e._id} to={`/albumdetails/${e._id}`}>
                        <p >{e.albumname}</p>
                    </Link>
                })}
            </div> : ""}

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