import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const Albums = () =>{

    const obj = useParams();
    const [albumlist, setAlbumlist] = useState([])
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(null)

    useEffect(() => {
        fetchAlbums()
    }, [obj,page])

    const fetchAlbums = () => {

        // console.log("objectid",obj.id)

        const URL = obj.id === "all" || obj.id === undefined ? `${process.env.REACT_APP_BACKEND_URL}/albums?page=${page}` : `${process.env.REACT_APP_BACKEND_URL}/genres/${obj.id}?page=${page}`

        axios.get(URL, { withCredentials: true })
            .then(res => {
                // console.log("data", res.data.albums)
                setAlbumlist(res.data.albums)
                setTotalPage(res.data.totalPages)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return <div>
        {albumlist?.map((e)=>{
            return <h1 key={e._id}>{e.albumname}</h1>
        })}

        <button disabled={page===1?true:false} onClick={()=>setPage(page-1)}>Back</button>
        <button disabled={page===totalPage || !albumlist.length ?true:false} onClick={()=>setPage(page+1)}>Next</button>
    </div>
}