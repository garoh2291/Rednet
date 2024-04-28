export default function Logo(props: {
  fill?: string;
  width?: string;
  height?: string;
  stoke?: string;
}) {
  const { fill = "none", ...restProps } = props;
  return (
    <svg
      width="138"
      height="54"
      viewBox="0 0 138 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_22_833)">
        <path
          d="M4.02567 13.503C4.66422 9.88172 8.11742 7.46373 11.7387 8.10226L26.0707 10.6294C27.8096 10.936 29.3556 11.9209 30.3685 13.3674L35.8459 21.19C36.8588 22.6365 37.2555 24.4261 36.9489 26.1651L34.4218 40.497C33.7832 44.1183 30.33 46.5363 26.7087 45.8977L12.3768 43.3706C10.6378 43.064 9.09179 42.0791 8.07899 40.6326L2.60148 32.81C1.58864 31.3635 1.19197 29.5739 1.49853 27.8349L4.02567 13.503ZM4.10485 28.3906C3.72177 30.5634 5.17256 32.6353 7.34531 33.0184L21.7705 35.562C23.9432 35.9451 26.0152 34.4943 26.3983 32.3215L28.9418 17.8964C29.3249 15.7236 27.8741 13.6517 25.7014 13.2686L11.2762 10.725C9.10347 10.3419 7.03157 11.7927 6.64839 13.9655L4.10485 28.3906Z"
          fill="#F35D74"
        />
        <path
          d="M8.35993 28.9555L11.4646 12.56L17.9331 13.7849C19.1713 14.0194 20.1861 14.4409 20.9775 15.0497C21.7753 15.6541 22.3273 16.4027 22.6337 17.2955C22.9464 18.184 23.0002 19.1699 22.7951 20.2533C22.5889 21.3421 22.1767 22.2343 21.5585 22.9299C20.9413 23.6202 20.1476 24.0891 19.1775 24.3366C18.2127 24.5851 17.1005 24.5901 15.841 24.3516L11.5099 23.5315L12.0375 20.7455L15.8081 21.4595C16.4699 21.5849 17.0368 21.5982 17.5088 21.4996C17.9808 21.4011 18.3579 21.1905 18.6401 20.868C18.9277 20.5465 19.1225 20.1163 19.2246 19.5772C19.3277 19.0328 19.3052 18.5531 19.1571 18.1381C19.0143 17.7241 18.7397 17.3791 18.3331 17.1031C17.9328 16.8227 17.3991 16.6194 16.732 16.493L14.3944 16.0504L11.8264 29.6119L8.35993 28.9555ZM18.627 23.1709L21.289 31.4037L17.4623 30.6791L14.8884 22.4629L18.627 23.1709Z"
          fill="#F35D74"
        />
      </g>
      <path
        d="M59.352 29.103C59.352 29.5783 59.321 30.0537 59.259 30.529H47.758C47.82 31.4797 48.0783 32.1927 48.533 32.668C49.0083 33.1227 49.6077 33.35 50.331 33.35C51.3437 33.35 52.067 32.8953 52.501 31.986H58.98C58.7113 33.1847 58.1843 34.2593 57.399 35.21C56.6343 36.14 55.663 36.8737 54.485 37.411C53.307 37.9483 52.005 38.217 50.579 38.217C48.8637 38.217 47.3343 37.8553 45.991 37.132C44.6683 36.4087 43.6247 35.3753 42.86 34.032C42.116 32.6887 41.744 31.1077 41.744 29.289C41.744 27.4703 42.116 25.8997 42.86 24.577C43.604 23.2337 44.6373 22.2003 45.96 21.477C47.3033 20.7537 48.843 20.392 50.579 20.392C52.2943 20.392 53.8133 20.7433 55.136 21.446C56.4587 22.1487 57.492 23.1613 58.236 24.484C58.98 25.786 59.352 27.3257 59.352 29.103ZM53.152 27.584C53.152 26.84 52.904 26.2613 52.408 25.848C51.912 25.414 51.292 25.197 50.548 25.197C49.804 25.197 49.1943 25.4037 48.719 25.817C48.2437 26.2097 47.9337 26.7987 47.789 27.584H53.152ZM61.5965 29.289C61.5965 27.491 61.9169 25.9203 62.5575 24.577C63.2189 23.2337 64.1179 22.2003 65.2545 21.477C66.3912 20.7537 67.6519 20.392 69.0365 20.392C70.1525 20.392 71.1445 20.6297 72.0125 21.105C72.9012 21.5597 73.5935 22.19 74.0895 22.996V15.06H80.1965V38H74.0895V35.582C73.6142 36.388 72.9425 37.0287 72.0745 37.504C71.2065 37.9793 70.1835 38.217 69.0055 38.217C67.6209 38.217 66.3602 37.8553 65.2235 37.132C64.1075 36.4087 63.2189 35.3753 62.5575 34.032C61.9169 32.668 61.5965 31.087 61.5965 29.289ZM74.1205 29.289C74.1205 28.173 73.8105 27.2947 73.1905 26.654C72.5912 26.0133 71.8472 25.693 70.9585 25.693C70.0492 25.693 69.2949 26.0133 68.6955 26.654C68.0962 27.274 67.7965 28.1523 67.7965 29.289C67.7965 30.405 68.0962 31.2937 68.6955 31.955C69.2949 32.5957 70.0492 32.916 70.9585 32.916C71.8472 32.916 72.5912 32.5957 73.1905 31.955C73.8105 31.3143 74.1205 30.4257 74.1205 29.289ZM95.7859 20.454C97.7905 20.454 99.3819 21.1257 100.56 22.469C101.738 23.7917 102.327 25.5897 102.327 27.863V38H96.2509V28.669C96.2509 27.677 95.9925 26.902 95.4759 26.344C94.9592 25.7653 94.2669 25.476 93.3989 25.476C92.4895 25.476 91.7765 25.7653 91.2599 26.344C90.7432 26.902 90.4849 27.677 90.4849 28.669V38H84.4089V20.609H90.4849V23.089C91.0222 22.3037 91.7455 21.6733 92.6549 21.198C93.5642 20.702 94.6079 20.454 95.7859 20.454ZM123.027 29.103C123.027 29.5783 122.996 30.0537 122.934 30.529H111.433C111.495 31.4797 111.753 32.1927 112.208 32.668C112.683 33.1227 113.282 33.35 114.006 33.35C115.018 33.35 115.742 32.8953 116.176 31.986H122.655C122.386 33.1847 121.859 34.2593 121.074 35.21C120.309 36.14 119.338 36.8737 118.16 37.411C116.982 37.9483 115.68 38.217 114.254 38.217C112.538 38.217 111.009 37.8553 109.666 37.132C108.343 36.4087 107.299 35.3753 106.535 34.032C105.791 32.6887 105.419 31.1077 105.419 29.289C105.419 27.4703 105.791 25.8997 106.535 24.577C107.279 23.2337 108.312 22.2003 109.635 21.477C110.978 20.7537 112.518 20.392 114.254 20.392C115.969 20.392 117.488 20.7433 118.811 21.446C120.133 22.1487 121.167 23.1613 121.911 24.484C122.655 25.786 123.027 27.3257 123.027 29.103ZM116.827 27.584C116.827 26.84 116.579 26.2613 116.083 25.848C115.587 25.414 114.967 25.197 114.223 25.197C113.479 25.197 112.869 25.4037 112.394 25.817C111.918 26.2097 111.608 26.7987 111.464 27.584H116.827ZM136.524 32.823V38H133.889C129.446 38 127.224 35.799 127.224 31.397V25.662H125.085V20.609H127.224V16.393H133.331V20.609H136.493V25.662H133.331V31.49C133.331 31.9653 133.435 32.3063 133.641 32.513C133.869 32.7197 134.241 32.823 134.757 32.823H136.524Z"
        fill="#F35D74"
      />
      <defs>
        <clipPath id="clip0_22_833">
          <rect
            width="36.1"
            height="38"
            fill="white"
            transform="matrix(-1 0 0 1 37.05 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
