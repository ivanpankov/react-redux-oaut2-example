const initialUser = {
    isAuthenticated: false,
    name: 'User Name',
    email: 'rwecrf@asdf.com',
    photo: 'path_to_photo.png'
};

const user = (state = initialUser, action = {}) => {
    switch (action.type) {


        default:
            return state;
    }
};

export default user;
