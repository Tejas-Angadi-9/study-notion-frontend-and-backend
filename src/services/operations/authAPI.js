import toast from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector"
import { authEndpoints } from "../api";

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API
} = authEndpoints


// * SEND OTP
export function sendotp(email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {

            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                // checkUserPresent: true
            })
            console.log("SEND OTP API Response....", response)
            console.log(response.data.success);

            toast.success('OTP sent successfully!');
            navigate('/verify-email')
        }
        catch (err) {
            console.log("SENDOTP API ERROR............", err)
            toast.error(err.response.data.message)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId);
    }
}

export function signup(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    otp,
    navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                phoneNumber,
                otp,
            })
            console.log("SIGNUP API RESPONSE............", response)

            toast.success("Signup successful")
            navigate('/login')
        }
        catch (err) {
            console.log("SIGNUP API ERROR............", err)
            toast.error(err.response.data.message)
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

// * LOGIN
export const login = (email, password, navigate) => async (dispatch) => {
    // return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
        const response = await apiConnector("POST", LOGIN_API, {
            email,
            password
        })

        console.log("LOGIN API RESPONSE -> ", { response });

        if (response.data.status !== "success") {
            throw new Error(response.data.message);
        }

        toast.success("Login Successful")
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.exisitingUser));
        // const userImage = response.data?.user?.image
        //     ? response.data.user.image
        //     : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        // dispatch(setUser({ ...response.data.user, image: userImage }))
        // localStorage.setItem("user", JSON.stringify(response.data))
        localStorage.setItem("token", JSON.stringify(response.data.exisitingUser.token))
        localStorage.setItem("user", JSON.stringify(response.data.exisitingUser))
        navigate("/dashboard/my-profile")
    }
    catch (err) {
        console.log("LOGIN API ERROR............", err)
        toast.error(err.response.data.message)
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId)
    // }
}

// * GET PASSWORD RESET TOKEN
export const getPasswordResetToken = (email, setEmailSent) => {
    // As we calling the network for backend i.e sending the request we use async function
    return async (dispatch) => {
        // Show loading until we get the data 
        //* Creates a toast loading
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            // To call we will use the apiConnector -> We send the data as we have defined parameters in email
            const response = await apiConnector("POST", RESETPASSTOKEN_API, { email });
            console.log("RESET PASSWORD TOKEN RESPONSE....", response);

            toast.success("Reset email sent!");
            setEmailSent(true);
        }
        catch (err) {
            toast.error(err.response.data.message)
        }
        // Setting loading back to false as we got the data 
        setLoading(false);
        //* Dismisses a toast loading
        toast.dismiss(toastId)
    }
}

// * RESET PASSWORD
export const resetPassword = (password, confirmPassword, token, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", RESETPASSWORD_API, {
                password,
                confirmPassword,
                token
            })
            console.log("RESET PASSWORD RESPONSE....", response);

            // if (!response.data.success){

            // }
            toast.success("Password reset successfully!");
            navigate('/login');
        }
        catch (err) {
            console.log("RESETPASSWORD ERROR............", err)
            toast.error(err.response.data.message)
        }
        setLoading(false);
        //* Dismisses a toast loading
        toast.dismiss(toastId)
    }
}

// * LOGOUT
export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}