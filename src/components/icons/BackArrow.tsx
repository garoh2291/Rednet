export default function BackArrow(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.71729 5L3.00021 12L9.71729 19"
        stroke="#F35D74"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="16.7331"
        y2="-1"
        transform="matrix(1 0 0 -1 3.26709 11.0312)"
        stroke="#F35D74"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
