import * as request from './requester';

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/bookSessions`);

export const getMyBooking = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/data/bookSessions?where=${query}`);
};

export const create = async (bookData, token) => {
    let response = await fetch(`${baseUrl}/data/bookSessions`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...bookData, likes: []})
    });

     console.log(response);
     
    let result = await response.json();

    return result;
};

export const update = (bookingId, bookData) => request.put(`${baseUrl}/data/bookSessions/${bookingId}`, bookData);

export const getOne = (bookingId, signal) => {
    return fetch(`${baseUrl}/data/bookSessions/${bookingId}`, { signal })
        .then(res => res.json())
};

export const destroy = (bookingId, token) => {
    return fetch(`${baseUrl}/data/bookSessions/${bookingId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (bookingId, booking, token) => {
    return fetch(`${baseUrl}/data/bookSessions/${bookingId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(booking)
    }).then(res => res.json());
};