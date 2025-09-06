'use client'

import TextInputComp from '@/components/TextInputComp'
import ButtonComp from '@/ui/ButtonComp'
import { Eye, UserIcon } from 'lucide-react'
import { useState } from 'react'

type LoginFormPropsType = {
  username: string
  password: string
}
export default function LoginForm() {
  const [formData,setFormData]=useState<LoginFormPropsType>({username:'',password:''})

  const submitHandler = () => {
    console.log(formData)
  }

  const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
      <p className="text-center text-2xl font-bold text-secondary-700">ورود</p>
      <div
       
        className="flex flex-col gap-6 w-full"
      >
        <TextInputComp
          name="username"
          onChange={changeHandler}
          value={formData.username}
          placeholder="نام کاربری"
          className="flex-1"
          icon={<UserIcon className="icon-small text-primary-900" />}
        />

        <TextInputComp
          name="password"
          onChange={changeHandler}
          value={formData.password}
          placeholder="رمز عبور"
          className="flex-1"
          icon={<Eye className="icon-small text-primary-900" />}
        />
        <ButtonComp
          text="ورود"
          isFormButton
          canClick
          className="bg-secondary-700 mt-5"
          onsubmit={submitHandler}
        />
      </div>
    </div>
  )
}
