import endPoints from './apiEndPoints';
import Http from './Http';

export function Home(userData) {
    const homeEndPoint = endPoints.homeEndPoint || null;
    return Http.post(homeEndPoint, userData);
}