import axios from "axios";

export function setCookie(cname, cvalue, exsecs = 1e10) {
    const date = new Date();
    //if (exsecs === null) exsecs = 99999999999999;
    date.setTime(date.getTime() + (exsecs * 1e3));
    let expires = "expires=" + date.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export function isLoggedIn() {
    return getCookie('jwt') != null;
}

export async function getUserDataFromJwtReq() {
    const authURL = 'http://79.118.160.229:1337/api/v1/user/account';
    const res = await axios.get(authURL, {
        headers: {
            Authorization: getCookie('jwt')
        }
    });
    if (res.data.username == null) {
        return null;
    }
    return res.data;
}