import { Switch, Route, Link } from 'react-router-dom'
import { AlbumDetail } from '../AlbumDetails/AlbumDetail'
import { ArtistData } from '../ArtistPanel/ArtistData/ArtistHome'
import { ArtistProfile } from '../ArtistPanel/ArtistData/ArtistProfile'
import { Login } from '../ArtistPanel/ArtistLogin/Login'
// import { Albums } from '../Landing/Content/Albums'
import { Albums2 } from '../Landing/Content/Albums2'

export const Allroutes = () => {

    return <Switch>

        <Route exact path="/">
            {/* <Albums/> */}
            <Albums2/>
        </Route>

        <Route path="/showAlbums/:id">
            {/* <Albums/> */}
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




        {/* <Route exact path="/cult">
            <Cult />
        </Route>

        <Route exact path="/profile">
            <Profile />
        </Route>

        <Route exact path="/sessiontype/:session">
            <Workout />
            <Footer />
        </Route>

        <Route exact path="/centrebooking/:centre">
            <CentreBooking />
            <Footer />
        </Route>

        <Route exact path="/desktop">
            <Desktop />
            <Footer />
        </Route>

        <Route exact path="/bookingdetails">
            <Booking />
            <Footer />
        </Route> */}

        <Route>
            <h1>404, Route Does not exist</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </Route>

    </Switch>
}