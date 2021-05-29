import endPoints from './apiEndPoints';
import Http from './Http';

export function Otp(userData) {
    const otpEndPoint = endPoints.otpEndPoint || null;
    return Http.post(otpEndPoint, userData);
}