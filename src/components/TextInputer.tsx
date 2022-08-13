interface Props {
  label: string,
  placeHolder: string,
  type: string
}

function TextInputter({ label, placeHolder, type }: Partial<Props>) {
  return (
    <div className="mb-10 ">
      <label
        htmlFor="first-name"
        className="block mb-1 font-bold text-gray-700"
      >
        {label || 'Email'}
      </label>
      <input
        type={type || 'text'}
        name="first-name"
        placeholder={placeHolder || '請輸入Email'}
        id="first-name"
        autoComplete="given-name"
        className="block w-full px-4 py-3 rounded focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

export default TextInputter;
