import TextBox from "@/ui/TextBox";
import { truncateText } from "@/utils/TruncateText";

const text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.'


export default function Page(){
return <div>
  
  <div className="flex gap-2">
    <div className="flex flex-col gap-4 !px-4 h-screen bg-secondary-300 overflow-auto">
        <select >
    <option>متون خوانده نشده</option>
    <option>متون تایید نشده</option>
  </select>
    {[1,2,3,4,5,6,7,8,9,10].map(item=>{
    return  <TextBox key={item} className="bg-primary-100 text-primary-900">{truncateText(text)}</TextBox>
    })}
    </div>
    <div className="flex flex-col gap-4 flex-1">
    {[1,2,3,4,5,6,7,8,9,10].map(item=>{
    return  <TextBox key={item} className="bg-primary-100 text-primary-900">{text}</TextBox>
  })}
    </div>
  
  
  </div>
  
</div>
}