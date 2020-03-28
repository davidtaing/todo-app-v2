const rootReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'SET_LOGIN_PENDING':
            console.log(`Logging in as ${action.payload.email} with password: ${action.payload.password}.`);
            return {
                ...state,
            }
        default:
            throw new Error();
    }
}

export default rootReducer;