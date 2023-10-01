import { useForm } from "react-hook-form";

export default function TestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label className="form-label" htmlFor="avatar">
          Avatar: *
        </label>
        <input
          type="text"
          id="avatar"
          {...register("avatar", {
            required: "Avatar is required",
          })}
          placeholder="Provide url"
          className="form-input"
        />
      </div>
      {errors.avatar && (
        <p className="text-read-500">{`${errors.avatar.message}`}</p>
      )}
      <div className="form-row">
        <label className="form-label" htmlFor="first_name">
          First Name: *
        </label>
        <input
          type="text"
          id="first_name"
          {...register("first_name", {
            required: "First Name is required",
            pattern: /^[A-Za-z]+$/i,
            minLength: {
              value: 3,
              message: "First Name must be at least 3",
            },
          })}
          placeholder="First Name"
          className="form-input"
        />
      </div>
      {errors.first_name && (
        <p className="text-read-500">{`${errors.first_name.message}`}</p>
      )}
      <div className="form-row">
        <label className="form-label" htmlFor="last_name">
          Last Name: *
        </label>
        <input
          type="text"
          id="last_name"
          {...register("last_name", {
            required: "Last Name is required",
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Invalid value for Last Name'
            },
            minLength: {
              value: 3,
              message: "Last Name must be at least 3",
            },
          })}
          placeholder="Last Name"
          className="form-input"
        />
      </div>
      {errors.last_name && (
        <p className="text-read-500">{`${errors.last_name.message}`}</p>
      )}
      <div className="form-row">
        <label className="form-label" htmlFor="email">
          Email: *
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Email"
          className="form-input"
        />
      </div>
      {errors.email && (
        <p className="text-read-500">{`${errors.email.message}`}</p>
      )}
      <button className="bg-blue-500" type="submit">
        Save
      </button>
      <button
        disabled={isSubmitting}
        className="btn btn-danger"
        style={{ marginLeft: "5px" }}
        onClick={() => setDisplayUser("")}
      >
        Clear
      </button>
    </form>
  );
}
