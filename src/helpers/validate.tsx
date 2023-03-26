function checkFirstLetter(value: string) {
  if (value.length === 0) {
    return true;
  }
  return !(value.charAt(0).toUpperCase() === value.charAt(0));
}

export default function validate(
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
