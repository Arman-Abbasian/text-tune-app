import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const UserVoiceTable = () => {
  return (
    <Table className="w-3xl rounded-lg overflow-hidden">
      <TableHeader className="bg-primary-700">
        <TableRow>
          <TableHead className="text-right text-white">متن</TableHead>
          <TableHead className="text-center text-white">عناوین</TableHead>
          <TableHead className="text-center text-white">وضعیت</TableHead>
          <TableHead className="text-left text-white">خواندن</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-primary-900 bg-secondary-500">
        {items.length === 0 ? (
          <p>متنی جهت خواندن موجود نیست</p>
        ) : (
          items.map((item) => (
            <TableRow key={item.id} className="text-primary-900">
              <TableCell className="text-right">{item.text}</TableCell>
              <TableCell className="text-center">
                {item.tags.map((tag) => (
                  <span key={tag} className="m-2 inline-block">
                    {tag}
                  </span>
                ))}
              </TableCell>
              <TableCell className="text-center">{item.condition}</TableCell>
              <TableCell className="text-left">+</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default UserVoiceTable

const items = [
  {
    id: 1,
    text: 'این متن تستی است و جهت خواندن از آن استفاده می شود',
    tags: ['a', 'b'],
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 2,
    text: 'این متن تستی است و جهت خواندن از آن استفاده می شود',
    tags: ['a', 'b'],
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 3,
    text: 'این متن تستی است و جهت خواندن از آن استفاده می شود',
    tags: ['a', 'b'],
    date: '1404/10/10',
    condition: 'pending',
  },
  {
    id: 4,
    text: 'این متن تستی است و جهت خواندن از آن استفاده می شود',
    tags: ['a', 'b'],
    date: '1404/10/10',
    condition: 'false',
  },
  {
    id: 5,
    text: 'این متن تستی است و جهت خواندن از آن استفاده می شود',
    tags: ['a', 'b'],
    date: '1404/10/10',
    condition: 'pending',
  },
]
