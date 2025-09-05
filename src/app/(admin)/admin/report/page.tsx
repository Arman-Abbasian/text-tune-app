import AdminTextVoicesTable from './AdminTextVoicesTable'
import { TextList } from './TextList'

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
