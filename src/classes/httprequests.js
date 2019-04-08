import Axios from "axios";

/** @file httprequests.js */

const startURL = "https://leftorganizednotesbe.appspot.com/api/cards"
//const startURL = "http://localhost:8080/api/cards"

export function post(data = {}) {
    return Axios.post(startURL, data);
}

export function getByDate(sm, em, sd, ed) {
    return Axios.get(`${startURL}/date?startMonth=${sm}&endMonth=${em}&startDay=${sd}&endDay=${ed}`);
}

export function getOne(id) {
    return Axios.get(`${startURL}/${id}`);
}

export function getAll() {
    return Axios.get(startURL);
}

export function put(id, data = {}) {
    return Axios.put(`${startURL}/${id}`, data);
}

export function del(id) {
    return Axios.delete(`${startURL}/${id}`);
}