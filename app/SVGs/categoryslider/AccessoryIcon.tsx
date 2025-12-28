type IconProps = {
  className?: string;
};

export default function AccessoryIcon({ className }: IconProps) {
  return (
    <svg
      width="34"
      height="42"
      viewBox="0 0 34 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.849609"
        y="0.850098"
        width="32"
        height="40"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="6.84961"
        y="4.79932"
        width="20"
        height="13"
        rx="1"
        fill="currentColor"
      />
      <path
        d="M21.8496 32.7993C21.8496 35.5607 19.611 37.7993 16.8496 37.7993C14.0882 37.7993 11.8496 35.5607 11.8496 32.7993C11.8496 30.0379 14.0882 27.7993 16.8496 27.7993C19.611 27.7993 21.8496 30.0379 21.8496 32.7993ZM14.6481 32.7993C14.6481 34.0152 15.6337 35.0009 16.8496 35.0009C18.0655 35.0009 19.0512 34.0152 19.0512 32.7993C19.0512 31.5834 18.0655 30.5978 16.8496 30.5978C15.6337 30.5978 14.6481 31.5834 14.6481 32.7993Z"
        fill="currentColor"
      />
      <rect
        x="13.8496"
        y="20.7993"
        width="6"
        height="3"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
}
