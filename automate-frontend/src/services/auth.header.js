export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        console.log("here is the user", token);
        return { Authorization: 'Bearer ' + token }; // for Spring Boot back-end
    } else {
        return {};
    }
}
