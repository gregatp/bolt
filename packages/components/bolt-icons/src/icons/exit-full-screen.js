import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const ExitFullScreen = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg {...otherProps} viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <path />
        <path
          fill={bgColor}
          d="M9.7.291a1.003 1.003 0 00-1.414 0L2.992 5.585V1.997c0-.55-.45-1-1-1s-1 .45-1 1v6.066a.926.926 0 00.07.3V8.376s0 .006.005.006c.037.094.094.175.156.256l.006.006.006.005.006.006v.006c.025.026.044.051.07.07h.005l.006.005s.006 0 .006.006h.006l.006.007a.875.875 0 00.25.155H1.608c.1.044.213.07.325.075h6.042c.55 0 1-.45 1-1 0-.549-.45-1-1-1H4.387l5.294-5.293a.968.968 0 00.012-1.4L9.7.29z"
          mask="url(#mask-2)"
          transform="translate(12 3)"
        />
        <g>
          <path
            fill={bgColor}
            d="M8.918.609s0-.006-.006-.006V.59a1.016 1.016 0 00-.15-.244L8.756.34 8.75.336 8.744.33 8.738.323C8.713.298 8.694.273 8.67.255L8.663.249 8.657.242 8.651.236 8.645.23 8.64.224a1.222 1.222 0 00-.213-.137h-.012A.977.977 0 008.008 0H1.996c-.55 0-1 .449-1 1 0 .549.45 1 1 1h3.588L.29 7.294a1.005 1.005 0 000 1.413C.484 8.9.74 9 .996 9c.256 0 .513-.101.706-.294l5.294-5.294V7c0 .549.45 1 1 1s1-.451 1-1V1a.99.99 0 00-.075-.388L8.918.609z"
            mask="url(#mask-4)"
            transform="translate(2 14)"
          />
        </g>
      </g>
    </svg>
  );
};

Icons.set('exit-full-screen', ExitFullScreen);
