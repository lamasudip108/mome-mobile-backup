import jwt_decode from 'jwt-decode';

export let isTokenExpired = token => {
    try {
        const decoded = jwt_decode(token);
        if (decoded.exp < Date.now() / 1000) {
            // Checking if token is expired.
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

export let decodeUserID = token => {
    try {
        const decoded = jwt_decode(token);
        return decoded.id;
    } catch (e) {
        return null;
    }
};
