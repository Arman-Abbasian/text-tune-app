import { ReactNode } from "react"

type TextBoxPropsType={
    children:ReactNode
}

export default function TextBox(props:TextBoxPropsType){
    const {children}=props
    return <p className='w-fit p-4 rounded-2xl text-center'>{children}</p>
}