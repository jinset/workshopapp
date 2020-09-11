import { environment } from '../../environments/environment';

const URL: string = environment.apiUrl;

export const auth: string = `${URL}/auth`;
// export const home: string = `${URL}/auth`;
export const reservation: string = `${URL}/reservation`;
export const notification: string = `${URL}/notification`;
export const user: string = `${URL}/user`;

