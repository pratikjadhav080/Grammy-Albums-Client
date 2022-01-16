import { Link } from "react-router-dom"

export const AlbumCard = ({ prop }) => {
    return <>
        {prop?.map((e) => {
            return <Link key={e._id} to={`/albumdetails/${e._id}`}>
                <h1 >{e.albumname} {e.dateofrelease}</h1>
            </Link>
        })}
    </>
}

{/* <h1 key={e._id}>{e.albumname} {e.dateofrelease}</h1>  */ }