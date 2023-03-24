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
    userName: userName.length === 0,
    userSurname: userSurname.length === 0,
    userDate: userDate === '',
    userCountry: userCountry === '',
    userSex: userSex === false,
    userPhoto: userPhoto === '',
    userConfirm: userConfirm !== true,
  };
}
