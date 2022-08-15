interface Props {
  label: string,
  placeHolder: string,
  type: string,
  outerClassName: string
}

function TextInputter({
  label, placeHolder, type, outerClassName = 'mb-10',
}: Partial<Props>) {
  return (
    <div className={outerClassName}>
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
        autoComplete="given-name"
        className="block w-full px-4 py-3 rounded focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

export default TextInputter;
