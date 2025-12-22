type IconProps = {
  className?: string;
};

export default function AutowinIcon({ className }: IconProps) {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.6948 21.6188L1.14011 21.582L1.1416 19.707L30.6963 19.7438L30.6948 21.6188Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.25 38.1818V0H16.75V38.1818H15.25Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 1.875V38.125H30.5V1.875H1.5ZM1.33333 0C0.596954 0 0 0.746193 0 1.66667V38.3333C0 39.2538 0.596954 40 1.33333 40H30.6667C31.403 40 32 39.2538 32 38.3333V1.66667C32 0.746192 31.403 0 30.6667 0H1.33333Z"
        fill="currentColor"
      />
    </svg>
  );
}
