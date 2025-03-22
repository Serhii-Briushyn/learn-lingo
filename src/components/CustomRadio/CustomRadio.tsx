interface CustomRadioProps {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  value,
  selectedValue,
  onChange,
}) => {
  const isChecked = value === selectedValue;

  return (
    <label className="flex items-center gap-2 mb-4 cursor-pointer">
      <input
        type="radio"
        name="custom-radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        onClick={() => onChange(value)}
        className="w-6 h-6 flex items-center justify-center"
      >
        {isChecked ? (
          <svg className="w-full h-full">
            <use href={`/sprite.svg#icon-radio-checked`} />
          </svg>
        ) : (
          <svg className="w-full h-full fill-none stroke-black/20 dark:stroke-white">
            <use href={`/sprite.svg#icon-radio`} />
          </svg>
        )}
      </div>
      <span className="text-base/snug font-normal">{value}</span>
    </label>
  );
};

export default CustomRadio;
