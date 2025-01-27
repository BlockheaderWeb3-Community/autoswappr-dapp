"use client";
import { useState } from "react";

function SelectOption() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className="p-[16px] bg-[#0D1016] text-white rounded-xl text-sm border-[#0D1016]"
      name="subject"
      required
    >
      <option value="25%">25%</option>
      <option value="50%">50%</option>
      <option value="75%">75%</option>
      <option value="100%">100%</option>
    </select>
  );
}

export default SelectOption;
