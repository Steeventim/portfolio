import { ComponentPropsWithRef } from "react";

export const Xicon = (
  Props: ComponentPropsWithRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={Props.size}
      height={Props.size}
      viewBox="0 0 251 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...Props}
    >
      <g>
        <path
          d="M149.078767,108.398529 L242.331303,0 L220.233437,0 L139.262272,94.1209195 L74.5908396,0 L0,0 L97.7958952,142.3275 L0,256 L22.0991185,256 L107.606755,156.605109 L175.904525,256 L250.495364,256 L149.07334,108.398529 L149.078767,108.398529 Z M118.810995,143.581438 L108.902233,129.408828 L30.0617399,16.6358981 L64.0046968,16.6358981 L127.629893,107.647252 L137.538655,121.819862 L220.243874,240.120681 L186.300917,240.120681 L118.810995,143.586865 L118.810995,143.581438 Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};
