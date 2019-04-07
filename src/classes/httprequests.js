import Axios from "axios";


/** @file httprequests.js */

const startURL = "http://localhost:8000/"

export function post(url = ``, data = '{}') {
    return Axios.post(startURL + url, data);
}

export function get(url = ``) {
    return Axios.get(startURL + url)
}