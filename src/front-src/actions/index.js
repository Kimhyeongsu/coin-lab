//menu toggle
export const TOGGLE =   'TOGGLE';

//token action
export const CHECK_TOKEN =   'CHECK_TOKEN';
export const UPDATE_TOKEN =   'UPDATE_TOKEN';


export function toggle() {
    return {
        type: TOGGLE
    }
}

export function checkToken() {
    return {
        type: CHECK_TOKEN
    }
}

export function refreshToken() {
    return {
        type: UPDATE_TOKEN
    }
}

export function register() {
    alert('회원가입');
}