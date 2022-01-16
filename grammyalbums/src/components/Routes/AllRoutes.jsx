import { Switch, Route, Link } from 'react-router-dom'
import { AlbumDetail } from '../AlbumDetails/AlbumDetail'
import { ArtistData } from '../ArtistPanel/ArtistData/ArtistHome'
import { Login } from '../ArtistPanel/ArtistLogin/Login'
import { Albums } from '../Landing/Content/Albums'

export const Allroutes = () => {
    return <Switch>

        <Route exact path="/">
            <Albums/>
        </Route>

        <Route path="/showAlbums/:id">
            <Albums/>
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