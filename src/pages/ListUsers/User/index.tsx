import CustomLink from "../../../components/сustomLink";
import { UserProps } from "./types";
import styles from "./user.module.scss";

export default function User({ userData }: UserProps) {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <span className={styles.info__field}>
          ФИО: <span className={styles.info__text}>{userData.fullName}</span>
        </span>
        <span className={styles.info__field}>
          город: <span className={styles.info__text}> {userData.city}</span>
        </span>
        <span className={styles.info__field}>
          компания: <span className={styles.info__text}>{userData.company}</span>
        </span>
      </div>
      <div className={styles.section__button}>
        <CustomLink to={`/${userData.id}`}>Подробнее</CustomLink>
      </div>
    </section>
  );
}
