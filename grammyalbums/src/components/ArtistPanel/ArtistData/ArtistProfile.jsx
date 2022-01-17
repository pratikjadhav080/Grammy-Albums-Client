import { useEffect, useState } from "react"

export const ArtistProfile = () => {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        console.log("loggedin")
        let artistdata = JSON.parse(localStorage.getItem("UserData"))
        console.log("datafromlocalstorage", artistdata)
        setProfile(artistdata.artist)
    }

    const ChangeProfileDetails = (e) => {
        let { name, value } = e.target

        setProfile({
            ...profile,
            [name]: value
        })
    }

    return <>
        <input type="text" name="name" onChange={ChangeProfileDetails} />
        <h1>Name - {profile.name}</h1>
        <img src={profile.photo} />
        <h1>Email - {profile.email}</h1>
        <h1>Age - {profile.age}</h1>
        <h1>Gender - {profile.gender}</h1>
    </>
}