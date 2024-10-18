import { useEffect } from "react";
import styles from "./listUsers.module.scss";
import { useUsersStore } from "../../store/useUsersStore";
import Loading from "../../components/Loading/Loading";
import User from "./User";
import { toast } from "react-toastify";

function ListUsers() {
  const { users, filteredUsers, getUsers, isLoading, error } = useUsersStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <Loading />;

  if (error) {
    toast.error(`Ошибка ${error.message}`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Список пользователей</h1>
        <span className={styles.header__info}>Найдено {users.length} пользователей</span>
      </header>
      <main className={styles.main}>
        {(filteredUsers.length ? filteredUsers : users).map((item) => (
          <User
            key={item.id}
            userData={{
              id: item.id,
              fullName: item.name,
              city: item.address.city,
              company: item.company.name,
            }}
          />
        ))}
      </main>
    </div>
  );
}

export default ListUsers;
