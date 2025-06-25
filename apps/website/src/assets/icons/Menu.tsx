const HamMenu = ({ className = "w-9 h-9" }) => {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_642_10605)">
          <rect
            width="48"
            height="48"
            rx="8"
            fill="#191919"
            fill-opacity="0.8"
          />
          <path
            opacity="0.1"
            d="M6.32317 49V-1M13.2156 49V-1M20.108 49V-1M27.0003 49V-1M33.8927 49V-1M40.7851 49V-1M-1 6.33794H49M-1 13.2305H49M-1 20.123H49M-1 27.0155H49M-1 33.908H49M-1 40.8005H49"
            stroke="white"
            stroke-opacity="0.302"
            stroke-width="0.673077"
          />
          <path
            d="M12 24H36"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16H36"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 32H36"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <mask id="path-6-inside-1_642_10605" fill="white">
            <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" />
          </mask>
          <path
            d="M8 1H40V-1H8V1ZM47 8V40H49V8H47ZM40 47H8V49H40V47ZM1 40V8H-1V40H1ZM8 47C4.13401 47 1 43.866 1 40H-1C-1 44.9706 3.02944 49 8 49V47ZM47 40C47 43.866 43.866 47 40 47V49C44.9706 49 49 44.9706 49 40H47ZM40 1C43.866 1 47 4.13401 47 8H49C49 3.02944 44.9706 -1 40 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z"
            fill="#7F7F7F"
            mask="url(#path-6-inside-1_642_10605)"
          />
        </g>
        <defs>
          <clipPath id="clip0_642_10605">
            <rect width="48" height="48" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default HamMenu;
