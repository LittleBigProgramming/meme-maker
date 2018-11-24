import { username, password } from "./secrets";

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

/**
 *
 * @param json
 * @returns {{type: string, memes: *}}
 */
function receiveMemes(json) {
    const { memes } = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

/**
 *
 * @returns {Promise<any | never>}
 */
function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
}

/**
 *
 * @returns {function(*): (*|PromiseLike<T | never>|Promise<T | never>|void)}
 */
export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}

/**
 *
 * @param meme
 * @returns {{type: string, meme: *}}
 */
function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    }
}

/**
 *
 * @param params
 * @returns {Promise<any | never>}
 */
function postMemeJson(params) {
    params["username"] = username;
    params["password"] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    return fetch('https://api.imgflip.com/caption_image', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
}

/**
 *
 * @param new_meme_object
 * @returns {function(*): Promise<any | never | never>}
 */
export function createMeme(new_meme_object) {
    return function (dispatch) {
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}