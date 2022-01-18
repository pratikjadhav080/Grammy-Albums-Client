import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AlbumCard } from "../../Landing/Content/AlbumCard";
import styles from "./ArtistHome.module.css"

export const ArtistData = () => {

    const { isAuth } = useSelector(store => store)
    const history = useHistory();
    const [artistprofile, setArtistprofile] = useState({})

    useEffect(() => {
        if (!isAuth) {
            history.push("/artistlogin")
        } else {
            getData()
        }
    }, [isAuth])

    const getData = () => {
        let artistid = JSON.parse(localStorage.getItem("artistid"))
        console.log("artistid", artistid)

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/artists/${artistid}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setArtistprofile(res.data)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return <div>
        <h1>You are successfully logged in</h1>
        <div className={styles.updatelinks}>
            <Link to="/artistprofile">
                <h1>Click here to see and update the Artist Profile</h1>
            </Link>

            <Link to="/addalbum">
                <h1>Add a new Album</h1>
            </Link>

            <Link to="/addsongs">
                <h1>Add new songs</h1>
            </Link>

        </div>

        <h1>{artistprofile?.name}</h1>
        <img src={artistprofile?.photo} alt="" />
        <AlbumCard prop={artistprofile?.albumids} />
    </div>
}