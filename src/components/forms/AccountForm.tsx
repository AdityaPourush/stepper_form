import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string()
});

type Schema = z.infer<typeof schema>;

const AccountForm = () => {
  const { register, handleSubmit } = useForm<Schema>();

  return (
    <form>
      <input {...register("username")} />
      <input {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AccountForm;