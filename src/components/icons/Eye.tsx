export default function Eye(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00033 9.5C4.95 9.5 2.3329 7.64554 1.20728 5C2.3329 2.35446 4.95 0.5 8.00033 0.5C11.0507 0.5 13.6677 2.35446 14.7934 5C13.6677 7.64554 11.0507 9.5 8.00033 9.5ZM4.16699 5C4.16699 7.11614 5.88418 8.83333 8.00033 8.83333C10.1165 8.83333 11.8337 7.11614 11.8337 5C11.8337 2.88386 10.1165 1.16667 8.00033 1.16667C5.88418 1.16667 4.16699 2.88386 4.16699 5ZM6.50033 5C6.50033 4.16948 7.1698 3.5 8.00033 3.5C8.83085 3.5 9.50033 4.16948 9.50033 5C9.50033 5.83052 8.83085 6.5 8.00033 6.5C7.1698 6.5 6.50033 5.83052 6.50033 5Z"
        stroke="#F35D74"
      />
    </svg>
  );
}