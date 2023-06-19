import Input from "./input";

type FieldProps = {
  id: string;
  label?: string;
  onChange: (value: string) => void;
  value: string;
};

const Field = ({ id, label, onChange, value }: FieldProps) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label ? label : id}
      </label>
      <Input name={id} value={value} onChange={onChange} />
    </div>
  );
};

export default Field;
