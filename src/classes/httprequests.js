/** @file httprequests.js */

const startURL = "http://localhost:8000/"

export function post(url = ``, data = {}) {
    return fetch((startURL + url), {
        method: "POST", 
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()); 
}

export function get(url = ``) {
    return fetch((startURL + url), {
        method: "GET", 
        credentials: "include",
    })
    .then(response => response.json()); 
}