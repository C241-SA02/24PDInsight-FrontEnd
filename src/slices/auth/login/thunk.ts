import { postFakeLogin } from "helpers/fakebackend_helper";
import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";
import { getFirebaseBackend } from "helpers/firebase_helper";

interface User {
    email: string;
    password: string;
}

export const loginUser = (
    user: User,
    history: any
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        let response: any;
        if (process.env.REACT_APP_DEFAULTAUTH === "fake") {

            response = await postFakeLogin({
                email: user.email,
                password: user.password,
            });

            localStorage.setItem("authUser", JSON.stringify(response));

        } else if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            let fireBaseBackend = await getFirebaseBackend();

            response = await fireBaseBackend.loginUser(
                user.email,
                user.password
            )
        }

        if (response) {
            dispatch(loginSuccess(response));
<<<<<<< HEAD
            history("/");
=======
            history("/dashboard");
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
        }
    } catch (error) {

        dispatch(loginError(error));
    }
};

export const logoutUser = () => async (dispatch: Dispatch) => {
    try {
        localStorage.removeItem("authUser");

        let fireBaseBackend = await getFirebaseBackend();

        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = fireBaseBackend.logout;
            dispatch(logoutSuccess(response));
        } else {
            dispatch(logoutSuccess(true));
        }
    } catch (error) {
        dispatch(loginError(error));
    }
}


export const socialLogin = (type: any, history: any) => async (dispatch: any) => {
    try {
        let response: any;

        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
<<<<<<< HEAD
=======
            console.log("Tried Social Login");
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
            const fireBaseBackend = getFirebaseBackend();
            response = fireBaseBackend.socialLoginUser(type);
        }

        const socialData = await response;

        if (socialData) {
            sessionStorage.setItem("authUser", JSON.stringify(socialData));
            dispatch(loginSuccess(socialData));
            history('/dashboard');
        }

    } catch (error) {
        dispatch(loginError(error));
    }
}