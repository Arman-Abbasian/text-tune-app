import AdminTextVoicesTable from './AdminTextVoicesTable'
import { TextList } from './TextList'

const text =
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.'

export default function Page() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 h-full">
      <div className="lg:col-span-1 max-h-full overflow-auto w-full bg-secondary-300 rounded-lg p-4">
        <TextList />
      </div>
      <div className="lg:col-span-2 overflow-auto bg-secondary-300 rounded-lg flex justify-center p-4">
        <AdminTextVoicesTable />
      </div>
    </div>
  )
}
