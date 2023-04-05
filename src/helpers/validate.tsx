function checkFirstLetter(value: string) {
  if (value.length === 0) {
    return true;
  }
  return !(value.charAt(0).toUpperCase() === value.charAt(0));
}

export function validateUserName(userName: string) {
  return checkFirstLetter(userName);
}

export function validateUserSurname(userSurname: string) {
  return checkFirstLetter(userSurname);
}

export function validateUserDate(userDate: string) {
  return userDate === '';
}

export function validateUserCountry(userCountry: string) {
  return userCountry === '';
}

export function validateUserSex(userSex: boolean) {
  return userSex === false;
}

export function validateUserPhoto(userPhoto: string) {
  return userPhoto === '';
}

export function validateUserConfirm(userConfirm: boolean) {
  return userConfirm !== true;
}

export function validate(
  userName: string,
  userSurname: string,
  userDate: string,
  userCountry: string,
  userSex: boolean,
  userPhoto: string,
  userConfirm: boolean
) {
  return {
    userName: checkFirstLetter(userName),
    userSurname: checkFirstLetter(userSurname),
    userDate: userDate === '',
    userCountry: userCountry === '',
    userSex: userSex === false,
    userPhoto: userPhoto === '',
    userConfirm: userConfirm !== true,
  };
}
