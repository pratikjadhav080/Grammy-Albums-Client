import { Link } from "react-router-dom"

export const AlbumCard = ({ prop }) => {

    return <>
        {prop?.map((e,i) => {
            return <Link key={i} to={`/albumdetails/${e._id}`}>
                <h1 >{e.albumname} {e.dateofrelease}</h1>
            </Link>
        })}
    </>
}
