export const AlbumCard = ({ prop }) => {
    return <>
        {prop?.map((e) => {
            return <h1 key={e._id}>{e.albumname} {e.dateofrelease}</h1> 
        })}
    </>
}