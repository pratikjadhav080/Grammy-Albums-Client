import axios from "axios"
import { useState } from "react"

export const Addalbum = () => {

    const [albumdata, setAlbumData] = useState({
        albumname: "",
        artistid: JSON.parse(localStorage.getItem("artistid")),
        genreid: "61e26ab62b6963713526a970",
        coverphoto: "",
        dateofrelease: "",
        songids: []
    })

    const addData = (e) =>{
        const {name,value} = e.target
        console.log(name,value)

        setAlbumData({
            ...albumdata,
            [name]:value
        })
    }

    const CreateAlbum = () =>{
        console.log(albumdata)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/albums`,albumdata)
        .then(res => {
            console.log("data", res.data)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }

    return <div>
        Albumname : <input type="text" name="albumname" onChange={addData} placeholder="albumname" /><br/>

        <label>Choose a Genre:</label>

        <select name="genreid" onChange={addData}>
            <option value="61e26ab62b6963713526a970">Country</option>
            <option value="61e26b5a2b6963713526a974">Rock</option>
            <option value="61e26b602b6963713526a976">Rap</option>
            <option value="61e26b672b6963713526a978">Pop</option>
            <option value="61e26b6c2b6963713526a97a">Soul</option>
            <option value="61e26b792b6963713526a97c">Others</option>
        </select>
        <br/>
        Coverphoto : <input type="text" name="coverphoto" onChange={addData} placeholder="coverphoto" /><br/>
        Dateofrelease : <input type="date" name="dateofrelease" onChange={addData} placeholder="dateofrelease" />
        <br/>
        <button onClick={CreateAlbum}>Create New Album</button>
    </div>
}


// "albumname": "1989",
// "artistid":
// "genreid":
// "coverphoto": "https://i.scdn.co/image/ab67616d00001e02b7e976d2b35c767f9012cb72",
// "dateofrelease": "2014-01-01",
// "songids": [],