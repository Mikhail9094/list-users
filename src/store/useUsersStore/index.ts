import { create } from "zustand";
import { getUsers } from "../../api/users";
import { IUsersStore } from "./types";

export const useUsersStore = create<IUsersStore>()((set, get) => ({
  users: [],
  filteredUsers: [],
  isLoading: false,
  error: null,
  getUsers: async () => {
    set({ isLoading: true });
    try {
      const data = await getUsers();
      set({ users: data });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      set({ error: e });
    } finally {
      set({ isLoading: false });
    }
  },
  filterByCompany: () => {
    const sortedUsers = get().users.sort((userA, userB) =>
      userA.company.name.localeCompare(userB.company.name)
    );
    set({ filteredUsers: sortedUsers });
  },
  filterByCity: () => {
    const sortedUsers = get().users.sort((userA, userB) =>
      userA.address.city.localeCompare(userB.address.city)
    );
    set({ filteredUsers: sortedUsers });
  },
}));
