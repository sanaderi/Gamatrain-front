import { extend, localize } from "vee-validate";
import {
  required,
  email,
  confirmed,
  min,
  size,
  image,
  mimes,
} from "vee-validate/dist/rules";

let phoneRegex = /^\+(?:[0-9\-] ?){6,14}[0-9]$/;
const phone = {
  validate(value, args) {
    return phoneRegex.test(value);
  },
};

let telRegex = /^(0)\d{10}$/;
const tel = {
  validate(value, args) {
    return telRegex.test(value);
  },
};

const dictionary = {
  en: {
    messages: {
      required: () => `This field is required`,
      email: () => `Enter a valid email`,
      confirmed: () => `Password does not match`,
      min: (_, { length }) =>
        `This field must be at least ${length} characters`,
      phone: () => `Phone is not valid`,
      tel: () => `Tel is not valid`,
      size: (_, { size }) => `Max size is ${size}KB`,
      image: () => `Image type is incorrect`,
      mimes: () => `Type is incorrect`,
    },
  },
};

extend("required", required);
extend("size", size);
extend("email", email);
extend("confirmed", confirmed);
extend("min", min);
extend("phone", phone);
extend("tel", tel);
extend("image", image);
extend("mimes", mimes);

localize(dictionary);
