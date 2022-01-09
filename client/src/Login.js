//just write rfc 
import React from 'react'

//imprting bootstrap elemets
//should install first
//npm i bootstrap react-bootstrap
//import bootsrap in App.js as well
//import 'bootstrap/dist/bootstrap/css/bootstrap.min.css';
import{ Container } from 'react-bootstrap'


// will authenticate the user
const AUTH_URL="https://accounts.spotify.com/authorize?client_id=70a94a34101f4f62a0a83b1049dadc40&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login to Sportify 2.0 pro
        </a>
    </Container>


}
