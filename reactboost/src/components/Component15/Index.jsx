import styles from "./form.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(6, "No mínimo 6 caracteres!"),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais!"),
  })
  .required();

const Index = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setIsSuccess(true);
  };

  return (
    <div className={styles.content}>
      <h2>Component 15</h2>
      <p>
        <strong>React Hook Form:</strong> É uma lib para validar formulários no
        React. <br />
        <strong>YUP:</strong> É uma lib para schema de validação de formulários
        no React
      </p>
      <br />

      <div>
        <form
          className={styles.contentForm}
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formGroup}>
            <input
              className={errors.name ? `${styles.inputError}` : ""}
              type="text"
              placeholder="Nome"
              {...register("name")}
            />
            <span className={styles.labelError}>{errors.name?.message}</span>
          </div>
          <div className={styles.formGroup}>
            <input
              className={errors.email ? `${styles.inputError}` : ""}
              type="text"
              placeholder="E-mail"
              {...register("email")}
            />
            <span className={styles.labelError}>{errors.email?.message}</span>
          </div>
          <div className={styles.formGroup}>
            <input
              className={errors.password ? `${styles.inputError}` : ""}
              type="text"
              placeholder="Senha"
              {...register("password")}
            />
            <span className={styles.labelError}>
              {errors.password?.message}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              className={
                errors.password_confirmation ? `${styles.inputError}` : ""
              }
              type="text"
              placeholder="Confirmar senha"
              {...register("password_confirmation")}
            />
            <span className={styles.labelError}>
              {errors.password_confirmation?.message}
            </span>
          </div>
          <div className={styles.formGroup}>
            <button className={styles.button} type="submit">
              Enviar
            </button>
          </div>

          {isSuccess && (
            <p className={styles.msg}>
              Recebemos sua mensagem, entraremos em contato em breve.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Index;
