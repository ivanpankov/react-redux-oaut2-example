const initialAbout = {
    testString: 'This is About page.'
};

const about = (state = initialAbout, action = {}) => {
    switch (action.type) {
        // case 'SET_VISIBILITY_FILTER':
        //     return action.filter

        default:
            return state;
    }
};

export default about;
