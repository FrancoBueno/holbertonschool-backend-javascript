import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promesa = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promesa).then((values) => {
    const arr = [];
    values.forEach((values) => {
      if (values.status === 'fulfilled') {
        arr.push(values);
      } else {
        arr.push({
          status: values.status,
          value: `Error: ${values.reason.message}`,
        });
      }
    });
    return arr;
  });
}
