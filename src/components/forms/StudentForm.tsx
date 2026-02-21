"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

type Props = {
  type: "create" | "update";
  data?: any;
};

const StudentForm = ({ type, data }: Props) => {
  // 🔥 Dynamic schema (image required only on create)
  const schema = z.object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long!" })
      .max(20, { message: "Username must be at most 20 characters long!" }),

    email: z.string().email({ message: "Invalid email address!" }),

    password:
      type === "create"
        ? z
            .string()
            .min(8, { message: "Password must be at least 8 characters long!" })
        : z.string().optional(),

    firstName: z.string().min(1, { message: "First name is required!" }),
    lastName: z.string().min(1, { message: "Last name is required!" }),
    phone: z.string().min(1, { message: "Phone is required!" }),
    address: z.string().min(1, { message: "Address is required!" }),
    bloodType: z.string().min(1, { message: "Blood Type is required!" }),
    birthday: z.coerce.date({
      required_error: "Birthday is required!",
    }),

    sex: z.enum(["male", "female"], {
      message: "Sex is required!",
    }),

    img:
      type === "create"
        ? z
            .any()
            .refine((files) => files?.length === 1, "Image is required")
        : z.any().optional(),
  });

  type Inputs = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = handleSubmit((formDataValues) => {
    const formData = new FormData();

    formData.append("username", formDataValues.username);
    formData.append("email", formDataValues.email);
    if (formDataValues.password)
      formData.append("password", formDataValues.password);
    formData.append("firstName", formDataValues.firstName);
    formData.append("lastName", formDataValues.lastName);
    formData.append("phone", formDataValues.phone);
    formData.append("address", formDataValues.address);
    formData.append("bloodType", formDataValues.bloodType);
    formData.append("birthday", formDataValues.birthday.toISOString());
    formData.append("sex", formDataValues.sex);

    if (formDataValues.img && formDataValues.img[0]) {
      formData.append("img", formDataValues.img[0]); // 🔥 important
    }

    console.log("Submitted Data:", formDataValues);
    console.log("FormData ready to send");
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new student" : "Update student"}
      </h1>

      {/* Authentication Section */}
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
        />

        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        {type === "create" && (
          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />
        )}
      </div>

      {/* Personal Section */}
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />

        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
        />

        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
        />

        <InputField
          label="Blood Type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
        />

        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          register={register}
          error={errors.birthday}
        />

        {/* Sex */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && (
            <p className="text-xs text-red-400">
              {errors.sex.message?.toString()}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>

          <input
            type="file"
            id="img"
            {...register("img")}
            className="hidden"
            accept="image/*"
          />

          {errors.img && (
            <p className="text-xs text-red-400">
              {errors.img.message?.toString()}
            </p>
          )}
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;