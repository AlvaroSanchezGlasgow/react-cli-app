import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    activate,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

const qs = require("querystring");   

function login(username, password) {
    const tokenRequestOptions = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${config.authorization}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Access-Control-Request-Method': '*',
         
          }),
          body: qs.stringify({
            grant_type: `${config.grant_type}`,
            username,
            password
          })
    };

    const genericGetRequestOptions = {
        method: 'GET',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Request-Method': '*',
    };

    return fetch(`${config.apiUrl}/oauth/token`, tokenRequestOptions)
   /* .then((response) => {
        console.log(response.text());
        const data = JSON.parse(response.text());
        console.log(data);
        return fetch(`${config.apiUrl}/users/`+username+'?access_token='+data.access_token, userDetailsRequestOptions)
    })*/
   
  
        .then(handleResponse)
        .then(user => {
            
            // store user details and token in local storage to keep user logged in between page refreshes
            console.log(JSON.stringify(user));
            sessionStorage.setItem('userName', username);
            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('access_token', user.access_token);

            

            return user;
        });
}

function activate(key) {

  const activateRequestOptions = {
    method: 'GET',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Request-Method': '*',
};

    return fetch(`${config.apiUrl}/activateUser?key=` + key, activateRequestOptions).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type',
            'Access-Control-Request-Method': '*',
        },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/createUser`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        //alert (response.status);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
               // location.reload(true);
            }

            if (response.status === 400) {
                // auto logout if 400 response returned from api
                logout();
               // location.reload(true);
            }

            if (response.status === 500) {
                // auto logout if 500 response returned from api
                logout();
               // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}