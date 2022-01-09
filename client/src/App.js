
// from client folder npm start 

//from server folder npm run devScript
//or 
//npm run nodemon Server.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';


//gives object with all information from URL
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  //IF HAVE CODE(USER DATA) THEN GIVE OTHERWISE LOGIN 
  return code ? <Dashboard code={code} /> : <Login/>
  
}

export default App;
