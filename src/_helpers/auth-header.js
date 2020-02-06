export function authHeader() {
    // return authorization header with token
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}