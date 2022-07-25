export default function FormButton({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
  customStyle,
}) {
  const fixedButtonStyle =
    'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10';

  return (
    <>
      {type === 'Button' ? (
        <button
          type={action}
          className={fixedButtonStyle + customStyle}
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
