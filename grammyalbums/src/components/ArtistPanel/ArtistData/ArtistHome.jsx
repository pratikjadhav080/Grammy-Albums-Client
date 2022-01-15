import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ArtistData = () =>{

    const {isAuth} = useSelector(store=>store)
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push("/artistlogin")
        }else{
            getData()
        }
    }, [isAuth])

    const getData = () =>{
        console.log("loggedin")
    }

    return <div>
        <h1>You are successfully logged in</h1>
    </div>
}