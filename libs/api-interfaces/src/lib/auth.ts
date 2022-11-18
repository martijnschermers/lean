export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegistration extends UserCredentials {
  email: string
}

export interface Token {
  token: string
}

export type Id = string;

export type ResourceId = {
  id: Id;
}
