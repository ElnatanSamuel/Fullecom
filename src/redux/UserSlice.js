import { createSlice } from "@reduxjs/toolkit";

const userLogged =
  localStorage.getItem("userislogged") != null
    ? JSON.parse(localStorage.getItem("userislogged"))
    : false;
const UserDontExist =
  localStorage.getItem("userdontexist") != null
    ? JSON.parse(localStorage.getItem("userdontexist"))
    : true;
const FirstName =
  localStorage.getItem("firstname") != null
    ? JSON.parse(localStorage.getItem("firstname"))
    : "";
const LastName =
  localStorage.getItem("lastname") != null
    ? JSON.parse(localStorage.getItem("lastname"))
    : "";
const UserEmail =
  localStorage.getItem("email") != null
    ? JSON.parse(localStorage.getItem("email"))
    : "";
const UserPassword =
  localStorage.getItem("password") != null
    ? JSON.parse(localStorage.getItem("password"))
    : "";

const initialState = {
  userIsLogged: userLogged,
  userDontExist: UserDontExist,
  userFirstName: FirstName,
  userLastName: LastName,
  userEmail: UserEmail,
  userPassword: UserPassword,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      const { email, firstName, lastName, password } = action.payload;
      state.userIsLogged = true;
      state.userDontExist = false;
      state.userFirstName = firstName;
      state.userLastName = lastName;
      state.userEmail = email;
      state.userPassword = password;

      localStorage.setItem("userislogged", JSON?.stringify(state.userIsLogged));
      localStorage.setItem(
        "userdontexist",
        JSON.stringify(state.userDontExist)
      );
      localStorage.setItem("firstname", JSON?.stringify(state.userFirstName));
      localStorage.setItem("lastname", JSON?.stringify(state.userLastName));
      localStorage.setItem("email", JSON?.stringify(state.userEmail));
      localStorage.setItem("password", JSON?.stringify(state.userPassword));
    },

    logUserOut(state, action) {
      state.userIsLogged = false;
      state.userDontExist = true;
      state.userFirstName = "";
      state.userLastName = "";
      state.userEmail = "";
      state.userPassword = "";

      localStorage.setItem("userislogged", JSON?.stringify(state.userIsLogged));
      localStorage.setItem(
        "userdontexist",
        JSON.stringify(state.userDontExist)
      );
      localStorage.setItem("firstname", JSON?.stringify(state.userFirstName));
      localStorage.setItem("lastname", JSON?.stringify(state.userLastName));
      localStorage.setItem("email", JSON?.stringify(state.userEmail));
      localStorage.setItem("password", JSON?.stringify(state.userPassword));
    },
  },
});

export const { userLoggedIn, logUserOut } = UserSlice.actions;

export default UserSlice.reducer;
