import * as request from './requester';

const baseUrl = 'https://kambera-ea8af-default-rtdb.firebaseio.com';

export const getAll = () => request.get(`${baseUrl}/available-sessions`);

export const getMyBooking = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/available-sessions?where=${query}`);
};

export const create = async (bookData, token) => {
    let response = await fetch(`${baseUrl}/available-sessions`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...bookData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const update = (bookingId, bookData) => request.put(`${baseUrl}/available-sessions/${bookingId}`, bookData);

export const getOne = (bookingId, signal) => {
    return fetch(`${baseUrl}/available-sessions/${bookingId}`, { signal })
        .then(res => res.json())
};

export const destroy = (bookingId, token) => {
    return fetch(`${baseUrl}/available-sessions/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (bookingId, booking, token) => {
    return fetch(`${baseUrl}/available-sessions/${bookingId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(booking)
    }).then(res => res.json());
};