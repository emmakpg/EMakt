import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple=true,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          multiple={multiple}
          {...register(`${name}`)}
          id={name}
          name={name}
          className="block w-full rounded-md border-none bg-transparent py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500
           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 dark:focus:ring-slate-500 sm:text-sm 
           sm:leading-6 dark:bg-transparent dark:text-slate-100"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id} className="dark:bg-slate-700">
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}