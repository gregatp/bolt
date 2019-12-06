import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const Training = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32.02 32.2">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M25.41 24.5a1.14 1.14 0 00-1.2.6l-1.3 3.5-2.9-5.2a11.61 11.61 0 005.7-4.3l3.4 6.2zm-9.4-2.4a10 10 0 1110-10 10 10 0 01-10 10zm-6.9 6.5l-1.3-3.5a.93.93 0 00-1.2-.6l-3.7.8 3.4-6.2a11.77 11.77 0 005.6 4.2zm22.8-2.3l-5-9.3a11.81 11.81 0 001.1-5 12 12 0 00-12-12 12.19 12.19 0 00-12 12.1 12.63 12.63 0 001.1 5.1l-5 9.2a.92.92 0 00.1 1 1 1 0 001 .4l5-1.1 1.7 4.8a1.11 1.11 0 00.9.7h.1a1.05 1.05 0 00.9-.5l4.1-7.7a14.92 14.92 0 002.1.2 12.31 12.31 0 002-.2l4.2 7.7a1.05 1.05 0 00.9.5h.1a1.07 1.07 0 00.9-.7l1.7-4.8 5 1.1a1 1 0 001-.4 1.07 1.07 0 00.1-1.1z"
        data-name="path-1"
      />
    </svg>
  );
};

Icons.set('training', Training);
