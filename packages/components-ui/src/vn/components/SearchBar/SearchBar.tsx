"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { Input, Option, Select, Button } from "@mui/joy";

export interface SearchBarProps {
  onSubmit?: (data: any) => void;
  locations: {
    slug: string;
    title: string;
  }[];
  categories: {
    slug: string;
    title: string;
  }[];
}
interface SearchInput {
  query: string;
  location: string;
  category: string;
}

export const SearchBar = ({
  locations = [],
  categories = [],
  onSubmit,
}: SearchBarProps) => {
  const [state, setState] = useState<SearchInput>({
    query: "",
    location: "",
    category: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit(state);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSelectLocation = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    setState({ ...state, location: newValue ?? "" });
  };

  const onSelectCategory = (
    _: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    setState({ ...state, category: newValue ?? "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="di-flex di-gap-[20px] di-items-stretch di-flex-col md:di-flex-row di-text-neutral-400 di-text-xl di-font-normal di-font-primary"
    >
      <Input
        name="query"
        placeholder="Nhập từ khóa..."
        className="di-grow md:di-py-3"
        value={state.query}
        onChange={onChange}
      />
      <Select
        className="di-w-full md:di-w-56"
        startDecorator={<IoLocationOutline />}
        name="location"
        defaultValue=""
        onChange={onSelectLocation}
      >
        <Option value="">Địa điểm</Option>
        {locations.map((item) => (
          <Option value={item.slug} key={item.slug}>
            {item.title}
          </Option>
        ))}
      </Select>

      <Select
        className="di-w-full md:di-w-56"
        startDecorator={<BiCategory />}
        name="category"
        defaultValue=""
        onChange={onSelectCategory}
      >
        <Option value="">Bộ phận</Option>
        {categories.map((item) => (
          <Option value={item.slug} key={item.slug}>
            {item.title}
          </Option>
        ))}
      </Select>

      <Button
        type="submit"
        onClick={() => {
          onSubmit && onSubmit(state);
        }}
        className="di-bg-blue-500 di-rounded-[10px] md:di-w-48 di-flex di-gap-2"
      >
        <FaSearch />
        Tìm kiếm
      </Button>
    </form>
  );
};
