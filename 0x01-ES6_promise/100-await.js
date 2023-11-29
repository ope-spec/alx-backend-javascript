import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = await uploadPhoto();
    const userPromise = await createUser();

    return { photoPromise, userPromise };
  } catch (error) {
    return { photoPromise: null, userPromise: null };
  }
}
