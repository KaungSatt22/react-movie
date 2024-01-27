import React from "react";

const InputRadio = ({ onChange, radioType, movieType }) => {
  return (
    <div className="space-x-2 flex items-center mb-4">
      <input
        type="radio"
        name="type"
        id={radioType}
        value={radioType}
        onChange={onChange}
        checked={movieType === radioType ? true : false}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={radioType}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {radioType}
      </label>
    </div>
  );
};

export default InputRadio;
