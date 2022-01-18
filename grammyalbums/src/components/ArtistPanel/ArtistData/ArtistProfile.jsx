import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InlineEdit } from "./Editing";

export const ArtistProfile = () => {

    const [profile, setProfile] = useState({})
    const { isAuth } = useSelector(store => store)
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push("/artistlogin")
        } else {
            getData()
        }
    }, [isAuth])

    const getData = () => {
        console.log("loggedin")
        let artistid = JSON.parse(localStorage.getItem("artistid"))
        console.log("artistid", artistid)

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/artists/${artistid}`, { withCredentials: true })
        .then(res => {
            console.log("data", res.data)
            setProfile(res.data)
        })
        .catch(err => {
            console.log("Error", err);
        })

    }

    const patchProfileData = () => {

        let finalData = {
            name: profile.name,
            email: profile.email,
            age: profile.age,
            gender: profile.gender,
            photo: profile.photo
        }

        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/artists/${profile._id}`, finalData)
            .then(res => {
                console.log("data", res.data)
                history.push("/artisthome")
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return <>

        <img src={profile.photo} alt="" /><br />

        {Object.keys(profile).length > 0 ? <>
            Name : <InlineEdit profiledata={profile} name="name" value={profile.name} setValue={setProfile} /><br />
            Email : <InlineEdit profiledata={profile} name="email" value={profile.email} setValue={setProfile} /><br />
            Age : <InlineEdit profiledata={profile} name="age" value={profile.age} setValue={setProfile} /><br />
            Gender : <InlineEdit profiledata={profile} name="gender" value={profile.gender} setValue={setProfile} /><br />
            Photo : <InlineEdit profiledata={profile} name="photo" value={profile.photo} setValue={setProfile} /><br />
        </> : ""}

        <button onClick={patchProfileData}>Save</button>
    </>
}