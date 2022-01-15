import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const Albums = () =>{

    const obj = useParams();
    const [albumlist, setAlbumlist] = useState([])

    useEffect(() => {
        fetchAlbums()
    }, [obj])

    const fetchAlbums = () => {

        console.log("objectid",obj.id)

        const URL = obj.id === "all" || obj.id === undefined ? `${process.env.REACT_APP_BACKEND_URL}/albums` : `${process.env.REACT_APP_BACKEND_URL}/genres/${obj.id}`

        axios.get(URL, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setAlbumlist(res.data)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return <div>
        {albumlist?.map((e)=>{
            return <h1 key={e._id}>{e.albumname}</h1>
        })}
    </div>
}