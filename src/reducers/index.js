import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME } from '../actions';

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
function memes(state = [], action) {
    switch(action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

/**
 *
 * @param state
 * @param action
 * @returns {Array}
 */
function createdMemes(state = [], action) {
    switch(action.type) {
        case NEW_MEME:
            state = [...state, action.meme];
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers(({ memes, createdMemes }));

export default rootReducer;