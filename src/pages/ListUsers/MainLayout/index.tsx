import CustomButton from "../../../components/сustomButton";
import { useUsersStore } from "../../../store/useUsersStore";
import styles from "./mainLayout.module.scss";
import { Outlet, useLocation } from "react-router-dom";

export default function LayoutListUsers() {
  const { filterByCity, filterByCompany } = useUsersStore();
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.filters}>
        <h3 className={styles.filters__title}>Сортировка</h3>
        <CustomButton onClick={filterByCity} disabled={pathname !== "/"}>
          по городу
        </CustomButton>
        <CustomButton onClick={filterByCompany} disabled={pathname !== "/"}>
          по компании
        </CustomButton>
      </section>
      <main className={styles.pages}>
        <Outlet />
      </main>
    </div>
  );
}
