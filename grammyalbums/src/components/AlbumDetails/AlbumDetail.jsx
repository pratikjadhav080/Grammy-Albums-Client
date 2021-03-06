import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Songs } from "./SongDetails";

export const AlbumDetail = () =>{

    const obj = useParams();
    const [album,setAlbum] = useState({})

    useEffect(()=>{
        fetchAlbum()
    },[obj])

    const fetchAlbum=()=>{

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/albums/${obj.id}`, { withCredentials: true })
        .then(res => {
            setAlbum(res.data)
        })
        .catch(err => {
            console.log("Error", err);
        })

    }

    return <div>
        <h1>{album.albumname}</h1>
        <img src={album.coverphoto}/>
        <h1>{album.dateofrelease}</h1>
        <Songs prop={album?.songids}/>
    </div>
}