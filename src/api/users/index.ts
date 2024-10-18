import { IUser } from "./types";

export const baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await fetch(`${baseURL}/users`);
  return await response.json();
};

export const getUser = async (userID: string): Promise<IUser> => {
  const response = await fetch(`${baseURL}/users/${userID}`);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
};
