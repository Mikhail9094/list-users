import { IUser } from "../../api/users/types";

export interface IUsersStore {
  users: IUser[];
  filteredUsers: IUser[];
  isLoading: boolean;
  error: Error | null;
  getUsers(): Promise<void>;
  filterByCompany(): void;
  filterByCity(): void;
}
