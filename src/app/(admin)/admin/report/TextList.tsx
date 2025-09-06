import React from "react";
import Filters from "./Filters";
import TagComp from "@/ui/TagComp";
const list = [
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
  {
    text: "متنی که توسط ادمین جهت خواندن کاربران اضافه شده است",
    tags: ["تگ 1", "تگ 2", "تگ 3", "تگ 4"],
  },
];
export function TextList() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <p className="text-primary-500 mb-2">فیلتر</p>
        <Filters />
      </div>
      <p className="text-primary-500 mb-2">لیست</p>
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
        {list.map((item, index) => {
          return <TextItem key={index} text={item.text} tags={item.tags} />;
        })}
      </div>
    </div>
  );
}

type TextItemPropsType = {
  text: string;
  tags: string[];
};
function TextItem(props: TextItemPropsType) {
  const { text, tags } = props;

  return (
    <div className="flex flex-col gap-4 w-full bg-primary-100 text-primary-700 rounded-lg p-4">
      <p>{text}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((item) => {
          return <TagComp key={item}>{item}</TagComp>;
        })}
      </div>
    </div>
  );
}
