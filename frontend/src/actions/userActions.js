export const setLoginPending = (email, password) => ({
    type: 'SET_LOGIN_PENDING',
    payload: {
        email: email,
        password: password,
    }
})