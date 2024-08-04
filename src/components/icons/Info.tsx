export default function Info(props: {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
}) {
  const { fill = "none", stroke = "#2183D1", ...restProps } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.00008"
        cy="8.99984"
        r="7.33333"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M9 5.6665V8.99984"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.6665V11.9998"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
