import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Eye, ReceiptText } from 'lucide-react'

const AdminTextVoicesTable = () => {
  return (
    <Table className="w-3xl rounded-lg overflow-hidden">
      <TableHeader className="bg-primary-700">
        <TableRow>
          <TableHead className="text-right text-white">نام کاربر</TableHead>
          <TableHead className="text-center text-white">تاریخ ضبط</TableHead>
          <TableHead className="text-center text-white">فایل صوتی</TableHead>
          <TableHead className="text-center text-white">یادداشت</TableHead>
          <TableHead className="text-center text-white">وضعیت</TableHead>
          <TableHead className="text-left text-white">جزییات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-primary-900 bg-secondary-500">
        {items.length === 0 ? (
          <p>متنی جهت خواندن موجود نیست</p>
        ) : (
          items.map((item) => (
            <TableRow key={item.id} className="text-primary-900">
              <TableCell className="text-right">{item.username}</TableCell>
              <TableCell className="text-center">{item.date}</TableCell>
              <TableCell className="text-center">{item.link}</TableCell>
              <TableCell className="flex justify-center text-center">
                <Eye />
              </TableCell>
              <TableCell className="text-center">{item.condition}</TableCell>
              <TableCell className="flex justify-end">
                <ReceiptText />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default AdminTextVoicesTable

const items = [
  {
    id: 1,
    username: 'کامیار شیبانی',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 2,
    username: 'علی محبی',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 3,
    username: 'احمد جابری',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'pending',
  },
  {
    id: 4,
    username: 'رجب قنبری',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 5,
    username: 'احمد جابری',
    link: 'https://dsfsf.com',
    date: '1404/10/10',
    condition: 'true',
  },
]
