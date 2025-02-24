export default {
  surname: /^[\w ]+$/,
  street: /^[\w ]+$/,
  postalCode: /^[0-9]{2}-[0-9]{3}/,
  phoneNumber: /^\d{9}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  name: /^[\w ]+$/,
  email: /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
  city: /^[\w ]+$/
};
