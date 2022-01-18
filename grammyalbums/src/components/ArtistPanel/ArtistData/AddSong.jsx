import axios from "axios"
import { useEffect, useState } from "react"

export const AddSong = () => {

    const [songdata, setSongData] = useState({
        songname: "",
        artistid: JSON.parse(localStorage.getItem("artistid")),
        albumid: "",
        timeofsong: ""
    })

    const [albumlist, setAlbumlist] = useState([])

    useEffect(()=>{
        getAlbums()
    },[])

    const getAlbums = () => {

        let id = JSON.parse(localStorage.getItem("artistid"))

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/artists/${id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setAlbumlist(res.data.albumids)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const addData = (e) =>{
        const {name,value} = e.target
        console.log(name,value)

        setSongData({
            ...songdata,
            [name]:value
        })
    }

    const addSong = () =>{
        console.log(songdata)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/songs`,songdata)
        .then(res => {
            console.log("data", res.data)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }


    return <>
        Songname : <input type="text" name="songname" onChange={addData} placeholder="songname" /><br />

        <label>Choose the Album:</label>

        <select name="albumid" onChange={addData}>
            {albumlist?.map((e)=>{
                return <option key={e._id} value={e._id}>{e.albumname}</option>
            })}
        </select>
        <br />
        Timeofsong : <input type="text" name="timeofsong" onChange={addData} placeholder="Timeofsong" /><br />

        <button onClick={addSong}>Add Song</button>
    </>
}