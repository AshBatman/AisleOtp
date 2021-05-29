import endPoints from './apiEndPoints';
import Http from './Http';

export function login(userData) {
    const loginEndPoint = endPoints.loginEndPoint || null;
    return Http.post(loginEndPoint, userData);
}