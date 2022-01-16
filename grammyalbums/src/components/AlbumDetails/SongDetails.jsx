export const Songs = ({ prop }) => {
    return <>
        {prop?.map((e) => {
            return <h1 key={e._id}>{e.songname}</h1>
        })

        }
    </>
}