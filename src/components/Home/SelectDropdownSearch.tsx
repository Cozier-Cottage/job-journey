import { useState, useEffect } from "react";
import {
  Combobox,
  CloseButton,
  Input,
  InputBase,
  useCombobox,
} from "@mantine/core";
import { TableContent } from "../../ui-types.d.ts";

interface SelectDropdownSearchProps {
  searchArray: string[];
  search: string;
  setSearch: (string) => void;
  firstVal: string;
}

export function SelectDropdownSearch({
  searchArray,
  search,
  setSearch,
  firstVal,
}: SelectDropdownSearchProps) {
  const [value, setValue] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = searchArray
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  useEffect(() => {
    if (value) setSearch(value);
  }, [value]);

  return (
    <Combobox 
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
      style={{ width: "18.5vw" }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          onClick={() => combobox.toggleDropdown()}
          rightSection={
            value !== null ? (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                    setValue(null);
                    setSearch('');
                }}
                aria-label="Clear value"
              />
            ) : (
              <Combobox.Chevron />
            )
          }
        >
          {value || <Input.Placeholder>Filter by company</Input.Placeholder>}
        </InputBase>   
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search"
        />
        <Combobox.Options>
          {options.length > 0 ? (
            options
          ) : (
            <Combobox.Empty>No matches</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
