import {useFetchApi} from '../../axios';

type RequestLoginFormData = {
  email: string;
  password: string;
};

export const loginUser = async ({email, password}: RequestLoginFormData) => {
  const router = 'login';

  try {
    const request = await useFetchApi.post(router, {email, password});
    const data = request.data;
    console.log({data});
  } catch (error) {
    console.log(error);
  }
};
