type IconProps = {
  className?: string;
};

export default function RevolvingIcon({ className }: IconProps) {
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
        d="M13.1486 4.99673C14.4996 4.44788 15.0974 3.78413 15.0974 3.2C15.0974 2.61587 14.4996 1.95212 13.1486 1.40327C11.8333 0.868932 9.97048 0.523077 7.87692 0.523077C5.78337 0.523077 3.92053 0.868932 2.60523 1.40327C1.25421 1.95212 0.738462 2.61587 0.738462 3.2C0.738462 3.78413 1.25421 4.44788 2.60523 4.99673C3.92053 5.53107 5.78337 5.87692 7.87692 5.87692C9.97048 5.87692 11.8333 5.53107 13.1486 4.99673ZM7.87692 6.4C12.2272 6.4 16 4.96731 16 3.2C16 1.43269 12.2272 0 7.87692 0C3.52662 0 0 1.43269 0 3.2C0 4.96731 3.52662 6.4 7.87692 6.4Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M13.1486 14.5968C14.4996 14.048 15.0974 13.3842 15.0974 12.8001C15.0974 12.216 14.4996 11.5522 13.1486 11.0034C11.8333 10.469 9.97048 10.1232 7.87692 10.1232C5.78337 10.1232 3.92053 10.469 2.60523 11.0034C1.25421 11.5522 0.738462 12.216 0.738462 12.8001C0.738462 13.3842 1.25421 14.048 2.60523 14.5968C3.92053 15.1312 5.78337 15.477 7.87692 15.477C9.97048 15.477 11.8333 15.1312 13.1486 14.5968ZM7.87692 16.0001C12.2272 16.0001 16 14.5674 16 12.8001C16 11.0328 12.2272 9.6001 7.87692 9.6001C3.52662 9.6001 0 11.0328 0 12.8001C0 14.5674 3.52662 16.0001 7.87692 16.0001Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M0 12.8002V3.2002H0.5V12.8002H0Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M15.5 12.8002V3.2002H16V12.8002H15.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M12 15.2001V5.6001H12.5V15.2001H12Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M3 15.2001V5.6001H3.5V15.2001H3Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M8 9.9999V6.3999H8.5V9.9999H8Z"
        fill="currentColor"
      />
    </svg>
  );
}
