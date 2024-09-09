"use client"
import {useForm} from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number()
})

type Schema = z.infer<typeof schema>;

const UserForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Schema>();

    return(
        <form action="">
            <label>Name</label>
            <input {...register("name")} className="border-2 border-black" />
            <input {...register("email")} />
            <input {...register("age")} />
        </form>
    )
}

export default UserForm;