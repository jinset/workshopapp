export interface AuthInterface {
  email: string;
  password: string;
}

export interface UserInterface {
  uuid: string;
  email: string;
  name: string;
  last_name?: string;
  surname?: string;
  password?: string;
  picture?: string;
  phone?: string;
  mobile?: string;
  status: string;
}

export interface SpacesInterface {
  uuid: string;
  name: string;
  email: string;
  phone: string;
  picture: string;
  address: string;
  status: string;
}

export interface CommonAreasInterface {
  uuid: string;
  name: string;
  space_id: string;
  spot: string;
  picture: string;
  terms_conditions: string;
  description: string;
  status: string;
}

