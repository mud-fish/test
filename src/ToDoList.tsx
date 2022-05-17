import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [todo, setTodo] = useState<string>("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input value={todo} onChange={onChange} placeholder="Write a todo" />
//       <button>Add</button>
//     </form>
//   );
// };

interface IForm {
  email: "string";
  firstName: "string";
  lastName: "string";
  username: "string";
  password1: "string";
  password2: "string";
}

const ToDoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError("password1", { message: "NO" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: "write here",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com/,
            message: "hihihi",
          },
        })}
        placeholder="Write a todo"
      />
      <span>{errors?.email?.message}</span>
      <input {...register("firstName")} placeholder="Write a todo" />
      <input {...register("lastName")} placeholder="Write a todo" />
      <input {...register("username")} placeholder="Write a todo" />
      <input {...register("password1")} placeholder="Write a todo" />
      <span>{errors?.password1?.message}</span>
      <input {...register("password2")} placeholder="Write a todo" />

      <button>Add</button>
    </form>
    //   );
  );
};

export default ToDoList;
