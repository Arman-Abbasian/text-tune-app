'use client'

import FormInput from '@/components/FormInput'
import ButtonComp from '@/ui/ButtonComp'
import { UserIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

type LoginFormPropsType = {
  username: string
  password: string
}
export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormPropsType>()

  const onSubmit = (data: LoginFormPropsType) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
      <p className="text-center text-2xl font-bold">ورود</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <FormInput
          name="username"
          register={register}
          placeholder="نام کاربری"
          icon={<UserIcon className="icon-small" />}
        />
        <FormInput
          name="password"
          register={register}
          type="password"
          placeholder="رمز عبور"
          showTogglePassword
        />
        <ButtonComp
          text="ورود"
          isFormButton
          canClick
          className="bg-secondary-700 mt-5"
        />
      </form>
    </div>
  )
}
