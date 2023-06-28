import { useState } from "react";
import ChevronDown from "../assets/icons/chevron-down";
import { OptionType } from "../features/select/select-page";

type SelectProps = {
  defaultValue?: OptionType;
  onChange: (option: OptionType) => void;
  options: OptionType[];
  placeholder?: string;
};

const Select = ({
  defaultValue,
  onChange,
  options,
  placeholder = "Select an option",
}: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<OptionType | null>(
    defaultValue ? defaultValue : null
  );

  return (
    <div className="select">
      <div
        className={`select__action ${isActive ? "isActive" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {activeOption ? activeOption.label : placeholder}
        <ChevronDown />
      </div>
      {isActive && (
        <div className="select__list">
          {options.map((option) => {
            return (
              <div
                className="select__list__item"
                key={option.value}
                onClick={() => {
                  onChange(option);
                  setActiveOption(option);
                  setIsActive(false);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
