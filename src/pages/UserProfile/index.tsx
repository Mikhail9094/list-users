import { useEffect, useState } from "react";
import CustomButton from "../../components/сustomButton";
import { IFormData } from "./types";
import styles from "./userProfile.module.scss";
import { fields } from "./constants";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../api/users";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

export default function UserProfile() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    userName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    comment: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { userID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserByID = async () => {
      setIsLoading(true);
      try {
        if (userID) {
          const user = await getUser(userID);
          setFormData((prev) => ({
            ...prev,
            name: user.name,
            userName: user.username,
            email: user.email,
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
            phone: user.phone,
            website: user.website,
          }));
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        toast.error(`Ошибка ${e.message}`, {
          position: "bottom-right",
          autoClose: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    getUserByID();
  }, [userID]);

  const changeUser = async () => {
    // делаем запрос на изменение профиля и потом на получение пользователя с новыми данными
    // отлавливаем ошибки

    setIsEditing(false);
    toast(`Изменения сохранены`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof IFormData
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  if (isLoading) return <Loading />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.header__title}>Профиль пользователя</h1>
          <CustomButton onClick={handleEditClick} className={styles.header__button}>
            Редактировать
          </CustomButton>
        </header>
        <form className={styles.form}>
          {fields.map((field) => (
            <div key={field.key} className={styles.form__item}>
              <label htmlFor={field.id} className={styles.form__label}>
                {field.label}:
              </label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.key]}
                onChange={(e) => handleInputChange(e, field.key)}
                className={`${styles.form__info} ${isEditing && styles.form__info_active}`}
                disabled={!isEditing}
                required
              />
            </div>
          ))}
          <div className={styles.form__item} style={{ width: "100%" }}>
            <label htmlFor="comment" className={styles.form__label}>
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={(e) => handleInputChange(e, "comment")}
              className={styles.form__comment}
              disabled={!isEditing}
            ></textarea>
          </div>
        </form>
        <footer className={styles.footer}>
          <CustomButton onClick={() => navigate("/")} className={styles.footer__button}>
            назад
          </CustomButton>
          <CustomButton
            onClick={changeUser}
            className={`${styles.footer__button} ${isEditing ? styles.footer__button_active : ""}`}
            disabled={!isEditing}
          >
            Отправить
          </CustomButton>
        </footer>
      </div>
    </div>
  );
}
