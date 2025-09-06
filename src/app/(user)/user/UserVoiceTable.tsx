
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ImageComp from '@/ui/ImageComp'
import TagComp from '@/ui/TagComp'
import Link from 'next/link'

const UserVoiceTable = () => {
  return (
    <Table className="rounded-lg overflow-hidden">
      <TableHeader className="bg-primary-700">
        <TableRow>
          <TableHead className="text-right text-primary-300">متن</TableHead>
          <TableHead className="text-center text-primary-300 max-w-64 md:max-w-max">
            عناوین
          </TableHead>
          <TableHead className="text-center text-primary-300">وضعیت</TableHead>
          <TableHead className="text-left text-primary-300">خواندن</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-primary-100">
        {items.length === 0 ? (
          <p>متنی جهت خواندن موجود نیست</p>
        ) : (
          items.map((item) => (
            <TableRow key={item.id} className="text-primary-700">
              <TableCell className="text-right">{item.text}</TableCell>
              <TableCell className="flex justify-center items-center flex-wrap max-w-64 md:max-w-full gap-3">
                {item.tags.map((tag) => (
                  <TagComp key={tag}>{tag}</TagComp>
                ))}
              </TableCell>
              <TableCell className="text-center">{item.condition}</TableCell>
              <TableCell className="text-left">
                <Link
                  href={'user/voice'}
                >
                  <ImageComp src={'/images/microphone.png'} alt="mic" />
                </Link>
              </TableCell>
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
    tags: ['adrrrred', 'دیزیشتیرین خون', 'adrrrdred', 'دیزیشیتیرین خون'],
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
    tags: ['adrrrred', 'دیزیشتیرین خون'],
    date: '1404/10/10',
    condition: 'pending',
  },
]
