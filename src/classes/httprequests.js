import Axios from "axios";

/** @file httprequests.js */

const startURL = "https://leftorganizednotesbe.appspot.com/api/cards"

export function post(data = {}) {
    return Axios.post(startURL, JSON.stringify(data));
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
    return Axios.put(`${startURL}/${id}`, JSON.stringify(data));
}

export function del(id) {
    return Axios.delete(`${startURL}/${id}`);
}