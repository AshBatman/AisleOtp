import endPoints from './apiEndPoints';
import Http from './Http';

export function login(userData) {
    const loginEndPoint = endPoints.loginEndPoint || null;
    console.log(userData);
    return Http.post(loginEndPoint, userData);
}