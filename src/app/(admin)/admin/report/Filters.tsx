"use client";

import SelectComp from "@/ui/SelectComp";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TextInputComp from "@/components/TextInputComp";
import ButtonComp from "@/ui/ButtonComp";
import { Funnel, RotateCcw } from "lucide-react";
import { useState } from "react";
import moment from "moment-jalaali";

const options = [
  { name: "همه", value: "0" },
  { name: "تایید شده", value: "1" },
  { name: "تایید نشده", value: "2" },
];

export default function Filters() {
  const [filters, setFilters] = useState({
    type: "0",
    search: "",
    isDateType: false,
    startDate: null,
    endDate: null,
  });

  const changeHandler = (e: React.ChangeEvent<any>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const changeSelectHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e });
  };

  const changeDateHandler = (date: any, name: string) => {
    const momentFromDate = moment(date.toDate()).format("jYYYY/jMM/jDD");
    setFilters({ ...filters, [name]: momentFromDate });
  };

  const changeSwitchHandler = (e: any, name: string) => {
    setFilters({ ...filters, [name]: e });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex  items-center gap-4">
        <SelectComp
          options={options}
          name="type"
          className="w-32"
          value={filters.type}
          onChange={(data) => changeSelectHandler(data, "type")}
        />
        <TextInputComp
          name="search"
          onChange={changeHandler}
          value={filters.search}
          placeholder="search"
          className="flex-1"
        />
      </div>
      <div className="flex !items-center space-x-2">
        <Label htmlFor="airplane-mode" className="text-primary-500">
          تاریخ صوت
        </Label>
        <div dir="ltr">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-primary-500 border-0"
            name="isDateType"
            checked={filters.isDateType}
            onCheckedChange={(checked) =>
              changeSwitchHandler(checked, "isDateType")
            }
          />
        </div>
        <Label htmlFor="airplane-mode" className="text-primary-500">
          تاریخ متن
        </Label>
      </div>
      <div className="flex items-center gap-4">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="از تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
          name="startDate"
          value={filters.startDate}
          onChange={(data) => changeDateHandler(data, "startDate")}
        />
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          placeholder="تا تاریخ"
          inputClass="!flex-1 w-full border border-primary-900 rounded-lg p-2 bg-primary-100"
          name="endDate"
          value={filters.endDate}
          onChange={(data) => changeDateHandler(data, "endDate")}
        />
      </div>
      <div className="flex items-center gap-4">
        <ButtonComp
          className={`w-20 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={false}
          loading={false}
          text={<Funnel className="!text-2xl" />}
        />
        <ButtonComp
          className={`w-20 hover:bg-primary-100 hover:text-primary-700 text-secondary-100 `}
          isFormButton={true}
          canClick={true}
          type="submit"
          disabled={false}
          loading={false}
          text={<RotateCcw className="!text-xl" />}
        />
      </div>
    </div>
  );
}
