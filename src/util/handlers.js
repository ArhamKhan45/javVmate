"use client";
export const registerHandler = () => {
  alert("Register");
};

export const loginHandler = () => {
  alert("Login");
};
export const alertme = () => {
  alert("Alert");
};
const validateContact = (value) => {
  const expr = /^(0|91)?[6-9][0-9]{9}$/;
  // alert(value);
  if (value) {
    if (!expr.test(value)) {
      alert(
        "invalid! contact number,number must have 10 digits and first number is greater than 6 "
      );
      return false;
    } else return true;
  } else {
    return false;
  }
};

export const registerFormHandler = (e, contact) => {
  let submit = true;

  submit = validateContact(contact);

  if (!submit) {
    return e.preventDefault();
  }
};
