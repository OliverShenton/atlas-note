interface FormInputProps {
  label: string;
}

const FormInput = ({ label }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label id="form-input-label" className="text-white">
        {label}
      </label>
      <input id="form-input" />
    </div>
  );
};

export default FormInput;
