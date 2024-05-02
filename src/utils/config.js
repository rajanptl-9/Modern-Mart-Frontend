const getToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const config = {
    headers: {
        Authorization: `Bearer ${getToken}`,
        Accept: 'application/json',
    }
}