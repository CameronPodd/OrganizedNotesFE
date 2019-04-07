import Axios from "axios";


/** @file httprequests.js */

const startURL = "https://leftorganizednotesbe.appspot.com/api"

export function post(url = ``, data = '{}') {
    return Axios.post(startURL + url, data);
}

export function get(url = ``) {
    return Axios.get(startURL + url)
}