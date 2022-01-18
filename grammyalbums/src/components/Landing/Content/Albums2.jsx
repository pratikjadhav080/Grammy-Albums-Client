import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom"
import { AlbumCard } from "./AlbumCard";

export const Albums2 = () => {

    const obj = useParams();
    const history = useHistory();
    const search = useLocation().search;
    const params=new URLSearchParams(search);
    const pagenum = params.get("p")
    const sortnum = params.get("s")
    const [albumlist, setAlbumlist] = useState([])
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState("")
    const [totalPage, setTotalPage] = useState(null)
    
    useEffect(()=>{
        setPage(+pagenum || 1)
        setSort(+sortnum || "")
    },[pagenum,sortnum]) 

    useEffect(() => {
        fetchAlbums()
    }, [obj])

    const changeURL = (p,s) =>{

        let finalLink;
        let pageparam= p?`p=${p}`:""
        let sortparam= s?`s=${s}`:""

        let directionLink = obj.id === "all" || obj.id === undefined?"/":`/showAlbums/${obj.id}`

        if(p && s) {
            finalLink=directionLink+"?"+pageparam+"&"+sortparam
        }else if(!p && s){
            finalLink=directionLink+"?"+sortparam
        }else if(p && !s){
            finalLink=directionLink+"?"+pageparam
        }else{
            finalLink=directionLink
        }

        history.push(finalLink)
    }

    const fetchAlbums = () => {

        const URL = obj.id === "all" || obj.id === undefined ? `${process.env.REACT_APP_BACKEND_URL}/albums?page=${pagenum||1}&sort=${sortnum||sort}` : `${process.env.REACT_APP_BACKEND_URL}/genres/${obj.id}?page=${pagenum||1}&sort=${sortnum||sort}`

        axios.get(URL, { withCredentials: true })
            .then(res => {
                setAlbumlist(res.data.albums)
                setTotalPage(res.data.totalPages)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return <div>

        <label>Sort by year of Album release</label>

        <select onChange={(e) => changeURL(pagenum,e.target.value)}>
            <option value="">normal</option>
            <option value="1">old to new</option>
            <option value="-1">new to old</option>
        </select>

        <AlbumCard prop={albumlist} />

        {albumlist.length ? <div>
            {page === 1 ? "" :  <button onClick={() => changeURL(page-1,sortnum)}>Back</button>}

            {[...Array(totalPage)].map((e,i) => {
                return <button style={{backgroundColor:page===i+1?"red":"white"}} key={i} onClick={() => changeURL(i+1,sortnum)}>{i+1}</button>
            })}

            {page === totalPage ? "" : <button onClick={() => changeURL(page+1,sortnum)}>Next</button>} 
        </div> : ""
        }

    </div>
}