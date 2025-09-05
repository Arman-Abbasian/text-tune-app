'use client'

import TextInputComp from '@/components/TextInputComp'
import ButtonComp from '@/ui/ButtonComp'
import { Eye, UserIcon } from 'lucide-react'
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
        <TextInputComp
          name="username"
          onChange={() => console.log()}
          value=""
          placeholder="نام کاربری"
          className="flex-1"
          icon={<UserIcon className="icon-small" />}
        />

        <TextInputComp
          name="password"
          onChange={() => console.log()}
          value=""
          placeholder="رمز عبور"
          className="flex-1"
          icon={<Eye className="icon-small" />}
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
