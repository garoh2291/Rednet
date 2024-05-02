export default function Watch(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8.25" stroke="#4E4B66" stroke-width="2" />
      <path
        d="M10 6.25V10.75L11.875 12.625"
        stroke="#4E4B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
