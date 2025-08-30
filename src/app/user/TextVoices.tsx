import { Table } from "@chakra-ui/react"

const TextVoices = () => {
  return (
    <Table.ScrollArea borderWidth="1px" maxW="full">
      <Table.Root size="lg" variant="outline">
        <Table.Header className="!bg-primary-700">
          <Table.Row>
            <Table.ColumnHeader  >متن</Table.ColumnHeader>
            <Table.ColumnHeader textAlign='center' >عناوین</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center" className="!bg-red-500">تاریخ</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">
              وضعیت
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">
              خواندن
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body className="!text-primary-900">
          {items.map((item) => (
            <Table.Row key={item.id} className="!text-primary-900">
              <Table.Cell textAlign='start'>{item.text}</Table.Cell>
              <Table.Cell textAlign='center'>{item.tags.map(item=><p className="m-2 inline-block ">{item}</p>)}</Table.Cell>
              <Table.Cell textAlign='center'>{item.date}</Table.Cell>
              <Table.Cell textAlign='center'>{item.condition}</Table.Cell>
              <Table.Cell textAlign='end'>+</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}
export default TextVoices

const items = [
  { id: 1,text:'این متن تستی است و جهت خواندن از آن استفاده می شود', tags:['a','b'], date: "1404/10/10", condition: 'false' },
   { id: 2,text:'این متن تستی است و جهت خواندن از آن استفاده می شود',tags:['a','b'],  date: "1404/10/10", condition: 'false' },
    { id: 3, text:'این متن تستی است و جهت خواندن از آن استفاده می شود',tags:['a','b'], date: "1404/10/10", condition: 'pending' },
     { id: 4,text:'این متن تستی است و جهت خواندن از آن استفاده می شود', tags:['a','b'], date: "1404/10/10", condition: 'false' },
      { id: 5, text:'این متن تستی است و جهت خواندن از آن استفاده می شود',tags:['a','b'], date: "1404/10/10", condition: 'pending' },
]
