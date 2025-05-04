
import React from "react";

interface FormLabelsProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}

const FormLabels: React.FC<FormLabelsProps> = ({
  label,
  id,
  type = "text",
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-700 sm:text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-indigo-600"
        required={required}
      />
    </div>
  );
};

export default FormLabels;
