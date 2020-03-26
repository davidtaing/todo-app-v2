const rootReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        default:
            throw new Error();
    }
}

export default rootReducer;