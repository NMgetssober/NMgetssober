export const signupValidator = {
    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileUsername must be between seven and thirty two characters',
            options: {min:1, max:32}
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    }
};
