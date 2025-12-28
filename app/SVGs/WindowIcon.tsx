type IconProps = {
  className?: string;
};

export default function WindowIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M15.3469 8.64751L0.569567 8.63281L0.570312 7.88281L15.3477 7.89751L15.3469 8.64751Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M7.625 15.2727V0H8.375V15.2727H7.625Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M0.75 0.75V15.25H15.25V0.75H0.75ZM0.666667 0C0.298477 0 0 0.298477 0 0.666667V15.3333C0 15.7015 0.298477 16 0.666667 16H15.3333C15.7015 16 16 15.7015 16 15.3333V0.666667C16 0.298477 15.7015 0 15.3333 0H0.666667Z"
        fill="currentColor"
      />
    </svg>
  );
}
