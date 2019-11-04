let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3001';
        break;
    case 'ddl-bluebadge-client.herokuapp.com' :
        APIURL = 'https://ddl-bluebadge-server.herokuapp.com'   
}

export default APIURL;