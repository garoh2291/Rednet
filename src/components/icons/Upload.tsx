export default function Upload(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 3.96905H6.40469V9.25499C6.40469 9.32374 6.46094 9.37999 6.52969 9.37999H7.46719C7.53594 9.37999 7.59219 9.32374 7.59219 9.25499V3.96905H8.75C8.85469 3.96905 8.9125 3.84874 8.84844 3.76749L7.09844 1.55187C7.08674 1.53693 7.0718 1.52484 7.05475 1.51653C7.03769 1.50822 7.01897 1.50391 7 1.50391C6.98103 1.50391 6.96231 1.50822 6.94525 1.51653C6.92819 1.52484 6.91326 1.53693 6.90156 1.55187L5.15156 3.76593C5.0875 3.84874 5.14531 3.96905 5.25 3.96905ZM12.7188 8.78624H11.7812C11.7125 8.78624 11.6562 8.84249 11.6562 8.91124V11.3175H2.34375V8.91124C2.34375 8.84249 2.2875 8.78624 2.21875 8.78624H1.28125C1.2125 8.78624 1.15625 8.84249 1.15625 8.91124V12.005C1.15625 12.2816 1.37969 12.505 1.65625 12.505H12.3438C12.6203 12.505 12.8438 12.2816 12.8438 12.005V8.91124C12.8438 8.84249 12.7875 8.78624 12.7188 8.78624Z"
        fill="black"
        fillOpacity="0.25"
      />
    </svg>
  );
}
