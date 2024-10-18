export interface UserProps {
  userData: IUserData;
}

interface IUserData {
  id: number;
  fullName: string;
  city: string;
  company: string;
}
