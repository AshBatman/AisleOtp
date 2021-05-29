import endPoints from './apiEndPoints';
import Http from './Http';

export function Otp(userData) {
    const otpEndPoint = endPoints.otpEndPoint || null;
    console.log(userData);
    console.log(otpEndPoint);
    return Http.post(otpEndPoint, userData);
}