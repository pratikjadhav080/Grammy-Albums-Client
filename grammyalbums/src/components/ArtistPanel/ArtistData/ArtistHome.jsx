import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ArtistData = () =>{

    const {isAuth} = useSelector(store=>store)
    const history = useHistory();
    const [artistprofile,setArtistprofile] = useState({})

    useEffect(() => {
        if (!isAuth) {
            history.push("/artistlogin")
        }else{
            getData()
        }
    }, [isAuth])

    const getData = () =>{
        console.log("loggedin")
        let artistdata= JSON.parse(localStorage.getItem("UserData"))
        console.log("datafromlocalstorage",artistdata)
        setArtistprofile(artistdata.artist)
    }

    return <div>
        <h1>You are successfully logged in</h1>
        <h1>{artistprofile.name}</h1>
        <img src={artistprofile.photo} alt=""/>
        {artistprofile.albumids.map((e)=>{
            return <h1>{e.albumname}</h1>
        })}
    </div>
}