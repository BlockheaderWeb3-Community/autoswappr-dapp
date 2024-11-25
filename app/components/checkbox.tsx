export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
//   id: string;
//   label: string;
}

const Checkbox = (props: CheckboxProps) => (
  <div className="w-full flex gap-2 items-center justify-center">
    <input
      className="peer relative appearance-none shrink-0 w-4 h-4 rounded-full bg-white focus:outline-none focus:ring-offset-0 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
      type="checkbox"
      {...props}
    />
    <svg
      className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block stroke-white outline-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    {/* <label htmlFor={props.id}>{props.label}</label> */}
  </div>
);

export default Checkbox;
