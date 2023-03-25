export function ButtonPrimary(props: { label: string; onClick: () => void }) {
  return (
    <button
      className="bg-khaki hover:bg-dkhaki text-white font-bold py-2 px-4 border border-dkhaki rounded"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
export function ButtonSecondary(props: { label: string; onClick: () => void }) {
  return (
    <button
      className="bg-transparent hover:bg-khaki text-dkhaki font-semibold hover:text-white py-2 px-4 border border-khaki hover:border-transparent rounded"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export function TextInput(props: {
  id: string;
  placeHolder: string;
  value: string;
  onChange: (e: string) => void;
}) {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Email"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </>
  );
}

export function Modal(props: {
  setOpenModal: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => props.setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
