import { createSlice } from "@reduxjs/toolkit";

const shippingName =
  localStorage.getItem("shippingname") != null
    ? JSON.parse(localStorage.getItem("shippingname"))
    : "";
const shippingEmail =
  localStorage.getItem("shippingemail") != null
    ? JSON.parse(localStorage.getItem("shippingemail"))
    : "";
const shippingPhone =
  localStorage.getItem("shippingphone") != null
    ? JSON.parse(localStorage.getItem("shippingphone"))
    : "";
const shippingStreetAddress =
  localStorage.getItem("shippingstreetaddress") != null
    ? JSON.parse(localStorage.getItem("shippingstreetaddress"))
    : "";
const shippingCity =
  localStorage.getItem("shippingcity") != null
    ? JSON.parse(localStorage.getItem("shippingcity"))
    : "";
const shippingPostal =
  localStorage.getItem("shippingpostal") != null
    ? JSON.parse(localStorage.getItem("shippingpostal"))
    : "";
const countryShipping =
  localStorage.getItem("shippingcountry") != null
    ? JSON.parse(localStorage.getItem("shippingcountry"))
    : "";
const regionShipping =
  localStorage.getItem("shippingregion") != null
    ? JSON.parse(localStorage.getItem("shippingregion"))
    : "";
const methodShipping =
  localStorage.getItem("shippingmethod") != null
    ? JSON.parse(localStorage.getItem("shippingmethod"))
    : "";
const totalGrand =
  localStorage.getItem("grandtotal") != null
    ? JSON.parse(localStorage.getItem("grandtotal"))
    : "";

const initialState = {
  fullName: shippingName,
  paymentEmail: shippingEmail,
  phoneNumber: shippingPhone,
  streetAddress: shippingStreetAddress,
  city: shippingCity,
  postalCode: shippingPostal,
  paymentCountry: countryShipping,
  paymentRegion: regionShipping,
  shippingMethod: methodShipping,
  grandTotalPrice: totalGrand,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymentVerification(state, action) {
      const {
        shippingMethod,
        grandTotal,
        shippingCountry,
        shippingRegion,
        fullName,
        email,
        phoneNumber,
        streetName,
        city,
        postalCode,
      } = action.payload;

      state.fullName = fullName;
      state.paymentEmail = email;
      state.phoneNumber = phoneNumber;
      state.streetAddress = streetName;
      state.city = city;
      state.postalCode = postalCode;
      state.paymentCountry = shippingCountry;
      state.paymentRegion = shippingRegion;
      state.shippingMethod = shippingMethod;
      state.grandTotalPrice = grandTotal;

      localStorage.setItem("shippingname", JSON.stringify(state.fullName));
      localStorage.setItem("shippingemail", JSON.stringify(state.paymentEmail));
      localStorage.setItem("shippingphone", JSON.stringify(state.phoneNumber));
      localStorage.setItem(
        "shippingstreetaddress",
        JSON.stringify(state.streetAddress)
      );
      localStorage.setItem("shippingcity", JSON.stringify(state.city));
      localStorage.setItem("shippingpostal", JSON.stringify(state.postalCode));
      localStorage.setItem(
        "shippingcountry",
        JSON.stringify(state.paymentCountry)
      );
      localStorage.setItem(
        "shippingregion",
        JSON.stringify(state.paymentRegion)
      );
      localStorage.setItem(
        "shippingmethod",
        JSON.stringify(state.shippingMethod)
      );
      localStorage.setItem("grandtotal", JSON.stringify(state.grandTotalPrice));
    },
  },
});

export const { paymentVerification } = paymentSlice.actions;

export default paymentSlice.reducer;
