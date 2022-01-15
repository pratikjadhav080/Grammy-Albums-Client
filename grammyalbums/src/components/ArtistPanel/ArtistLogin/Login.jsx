import styles from "./Login.module.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router"
import { loginUser } from "../../../Store/AuthStore/action";


export const Login = () => {

    const dispatch = useDispatch();
    const {isAuth} = useSelector(store=>store)

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleData = (e) => {
        const { value, name } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const submitData = (e) => {
        e.preventDefault()
        dispatch(loginUser(loginData))
    }

    
    if (isAuth) {
        return <Redirect to="/artisthome" />
    }

    return <>
        <div className={styles.login}>
            <form onSubmit={submitData}>
                <input type="email" name="email" onChange={handleData} /><br />
                <input type="password" name="password" onChange={handleData} /><br />
                <input className={styles.btn} type="submit" value="SUBMIT" onChange={handleData} />
            </form>
        </div>

    </>
}