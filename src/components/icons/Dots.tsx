export default function Dots(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="4.66659"
        cy="7.99992"
        rx="1.33333"
        ry="1.33333"
        transform="rotate(-90 4.66659 7.99992)"
        fill="#14142B"
      />
      <ellipse
        cx="11.3333"
        cy="7.99992"
        rx="1.33333"
        ry="1.33333"
        transform="rotate(-90 11.3333 7.99992)"
        fill="#14142B"
      />
    </svg>
  );
}
