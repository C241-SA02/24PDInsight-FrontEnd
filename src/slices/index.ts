import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import LoginReducer from "./auth/login/reducer";

// register
import RegisterReducer from "./auth/register/reducer";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

<<<<<<< HEAD
// Chat
import ChatReducer from "./chat/reducer";

// MailBox
import MailboxReducer from "./mailbox/reducer";

// Calendar
import CalendarReducer from "./calendar/reducer";

// Ecommerce
import EcommerceReducer from "./ecommerce/reducer";

// HR Managment
import HRManagmentReducer from "./hrManagement/reducer";

// Notes
import NotesReducer from "./notes/reducer";

// Social
import SocialReducer from "./social/reducer";

// Invoice
import InvoiceReducer from "./invoice/reducer"

// Users
import UsersReducer from "./users/reducer";

=======
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Register: RegisterReducer,
<<<<<<< HEAD
    Profile: ProfileReducer,
    Chat: ChatReducer,
    Mailbox: MailboxReducer,
    Calendar: CalendarReducer,
    Ecommerce: EcommerceReducer,
    HRManagment: HRManagmentReducer,
    Notes: NotesReducer,
    Social: SocialReducer,
    Invoice: InvoiceReducer,
    Users: UsersReducer,
=======
    Profile: ProfileReducer
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;