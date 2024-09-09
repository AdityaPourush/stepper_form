import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string()
});

type Schema = z.infer<typeof schema>;

const AddressForm = () => {
  const { register, handleSubmit } = useForm<Schema>();

  return (
    <form>
      <input {...register("street")} />
      <input {...register("city")} />
      <input {...register("state")} />
      <input {...register("zip")} />
    </form>
  );
};

export default AddressForm;