export default function Graph(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="356"
      height="59"
      viewBox="0 0 356 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M355 15.7996L349.622 21.0455C349.533 21.1316 349.437 21.2094 349.334 21.2779L344.231 24.6796C344.063 24.7916 343.879 24.8775 343.685 24.9344L338.687 26.4025C338.54 26.4456 338.389 26.4717 338.236 26.4804L334.281 26.7038C333.477 26.7492 332.725 26.3086 332.371 25.5856L328.771 18.2229C328.141 16.9359 326.403 16.7086 325.464 17.7907L321.932 21.8599L316.569 26.9496C316.471 27.043 316.363 27.1261 316.248 27.1977L311.489 30.1545C311.114 30.3879 310.671 30.4902 310.231 30.4455L306.526 30.0688C305.827 29.9977 305.141 30.2991 304.721 30.8628L300.992 35.8618C300.369 36.6978 299.207 36.9143 298.324 36.3591L294.656 34.0526C294.471 33.9361 294.306 33.7901 294.168 33.6203L289.761 28.1933C289.225 27.5327 288.329 27.2839 287.529 27.5732L283.551 29.0111C283.42 29.0585 283.294 29.1195 283.176 29.1931L277.843 32.5064L273.651 35.1235C272.875 35.6079 271.869 35.5041 271.208 34.8716L268.305 32.0916C267.492 31.3129 266.196 31.3588 265.44 32.1931L260.001 38.1942C259.043 39.2503 257.32 38.9946 256.711 37.7061L255.921 36.0368C255.839 35.8637 255.783 35.6797 255.753 35.4905L250.749 3.4558C250.529 2.04742 248.948 1.31477 247.731 2.05714L245.409 3.4739C245 3.72321 244.694 4.11083 244.547 4.56635L240.87 15.9455C240.306 17.6913 237.886 17.8198 237.14 16.1436L233.925 8.91696C233.811 8.66187 233.646 8.43336 233.439 8.24616L229.173 4.39087C228.603 3.87614 227.789 3.73281 227.078 4.02202L223.044 5.66267C222.836 5.74727 222.644 5.8663 222.476 6.01477L219.14 8.95404C218.164 9.8141 216.64 9.52819 216.042 8.3729L213.484 3.43128C212.738 1.99048 210.677 1.99047 209.931 3.43128L206.434 10.1886C206.278 10.4893 206.048 10.7456 205.767 10.9334L202.53 13.0907C201.543 13.7485 200.204 13.408 199.651 12.3588L195.715 4.88757C195.38 4.25238 194.731 3.84531 194.013 3.82099L189.978 3.68422C189.769 3.67714 189.562 3.63732 189.366 3.56623L185.941 2.32824C184.939 1.96578 183.828 2.4535 183.416 3.43698L179.524 12.7378C179.056 13.8553 177.71 14.3037 176.666 13.6901L175.498 13.0038C174.327 12.3164 172.827 12.9693 172.532 14.2942L167.802 35.5681C167.684 36.0986 167.355 36.5583 166.891 36.8414L162.388 39.5886C162.201 39.7025 162.035 39.8462 161.894 40.0141L158.059 44.6067C157.284 45.5353 155.868 45.5682 155.05 44.6767L151.771 41.1017C151.339 40.6307 150.708 40.3945 150.073 40.4663L146.839 40.8317C146.066 40.9189 145.414 41.4461 145.167 42.1832L140.731 55.4127C140.367 56.4995 139.166 57.0583 138.1 56.6368L134.843 55.3491C134.649 55.2722 134.468 55.1653 134.306 55.0322L130.751 52.1003C129.835 51.3452 128.468 51.5489 127.812 52.538L124.783 57.1063C124.117 58.1109 122.72 58.3024 121.808 57.5143L118.016 54.2369L113.201 50.2299C112.758 49.8614 112.178 49.7017 111.609 49.7917L107.244 50.4821C107.078 50.5085 106.908 50.5136 106.741 50.4975L102.137 50.0555C101.712 50.0146 101.31 49.8384 100.992 49.5526L97.2545 46.1956C96.5169 45.5332 95.4055 45.511 94.6421 46.1434L91.7981 48.4996C91.0304 49.1356 89.9116 49.1092 89.1748 48.4377L85.2072 44.8213C85.0359 44.6651 84.893 44.4805 84.785 44.2754L81.2633 37.5915C80.5022 36.147 78.4244 36.1739 77.7009 37.6376L75.6305 41.8265C74.913 43.2781 72.858 43.3199 72.0821 41.8987L70.4153 38.8458C69.6105 37.3717 67.4571 37.4861 66.8129 39.0371L63.9244 45.9918C63.4135 47.222 61.8652 47.6183 60.826 46.7848L59.07 45.3762C58.1637 44.6492 56.8307 44.8449 56.1715 45.8018L52.8781 50.583C52.3077 51.4111 51.211 51.6869 50.3167 51.2272L47.1966 49.6233C46.672 49.3537 46.0552 49.3293 45.5109 49.5568L42.7863 50.6958C41.7353 51.1351 40.5303 50.6093 40.1375 49.5401L36.2429 38.9371C35.7903 37.7049 34.2934 37.2354 33.2182 37.9885L30.7446 39.7211C30.1792 40.1172 29.4494 40.1936 28.8141 39.9232L24.7539 38.1955C24.4713 38.0752 24.1647 38.0216 23.858 38.0389L19.3895 38.2914C19.0129 38.3126 18.6499 38.44 18.3426 38.6587L13.445 42.1445C13.3496 42.2124 13.2484 42.2718 13.1427 42.322L8.73887 44.4115C8.15142 44.6903 7.4602 44.6366 6.92289 44.2704V44.2704C6.6534 44.0867 6.43786 43.8344 6.29854 43.5396L1 32.3259"
        stroke="#4D87FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
