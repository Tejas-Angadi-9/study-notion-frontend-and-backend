//! Here we will mention all the links/routes
const BASE_URL = process.env.REACT_APP_BASE_URL;

//* AUTH ENDPOINTS
export const authEndpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


export const categories = {
    CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}