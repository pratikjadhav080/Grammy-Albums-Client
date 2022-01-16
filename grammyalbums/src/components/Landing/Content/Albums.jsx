import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Albums = () => {

    const obj = useParams();
    const [albumlist, setAlbumlist] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(null)
    const [sort,setSort] = useState("")

    useEffect(() => {
        fetchAlbums()
    }, [obj, page,sort])

    const fetchAlbums = () => {

        // console.log("objectid",obj.id)

        const URL = obj.id === "all" || obj.id === undefined ? `${process.env.REACT_APP_BACKEND_URL}/albums?page=${page}&sort=${sort}` : `${process.env.REACT_APP_BACKEND_URL}/genres/${obj.id}?page=${page}&sort=${sort}`

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
//setSort(e.target.value)
    return <div>

        <label>Sort by year of Album release</label>

        <select onChange={(e)=>setSort(e.target.value)}>
            <option value="">normal</option>
            <option value="1">old to new</option>
            <option value="-1">new to old</option>
        </select>

        {albumlist?.map((e) => {
            return <h1 key={e._id}>{e.albumname}-{e.dateofrelease}</h1>
        })}

        {albumlist.length ? <div>
            <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)}>Back</button>
            <button disabled={page === totalPage ? true : false} onClick={() => setPage(page + 1)}>Next</button>
        </div> : ""
        }

    </div>
}