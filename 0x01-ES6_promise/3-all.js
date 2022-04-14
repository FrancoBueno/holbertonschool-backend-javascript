import { uploadPhoto } from './utils';
import { createUser } from './utils';
export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  return Promise.all([upload, create])
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`), () => console.log('Signup system offline'));
}
