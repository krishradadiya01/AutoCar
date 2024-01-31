import strings from '../i18n/strings';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const emailPassRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const nameRegex = /^[a-zA-Z ]{2,40}$/;

const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const validateEmail = email => {
  if (!email) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return emailRegex.test(email)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: strings.validEmail,
        };
  }
};

const validatePassword = password => {
  if (!password) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return emailPassRegex.test(password)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: strings.validPass,
        };
  }
};

const validateName = name => {
  if (!name) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return nameRegex.test(name)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: strings.validName,
        };
  }
};

const validatePhone = phone => {
  if (!phone) {
    return {
      status: false,
      msg: strings.thisFieldIsMandatory,
    };
  } else {
    return phoneRegex.test(phone)
      ? {status: true, msg: ''}
      : {
          status: false,
          msg: strings.validPhone,
        };
  }
};

export {validateEmail, validatePassword, validateName, validatePhone};
