import { Switch, Route, Link } from 'react-router-dom'
import { AlbumDetail } from '../AlbumDetails/AlbumDetail'
import { ArtistData } from '../ArtistPanel/ArtistData/ArtistHome'
import { ArtistProfile } from '../ArtistPanel/ArtistData/ArtistProfile'
import { Login } from '../ArtistPanel/ArtistLogin/Login'
import { Albums2 } from '../Landing/Content/Albums2'

export const Allroutes = () => {

    return <Switch>

        <Route exact path="/">
            <Albums2/>
        </Route>

        <Route path="/showAlbums/:id">
            <Albums2/>
        </Route>

        <Route path="/albumdetails/:id">
            <AlbumDetail/>
        </Route>

        <Route path="/artistlogin">
            <Login/>
        </Route>

        <Route path="/artisthome">
            <ArtistData/>
        </Route>

        <Route path="/artistprofile">
            <ArtistProfile/>
        </Route>

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>
        
    </Switch>
}