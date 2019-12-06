import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const ProductDelivery = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 25.9 32">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M11.9 19.3v10.1l-10-5.1V14.2zm12-5.1v10.1l-10 5.1V19.3zm2 10.8v.2c0 .1-.1.1-.1.2s-.1.1-.1.2-.1.1-.2.1l-.1.1-12 6.1a1.09 1.09 0 01-.5.1.6.6 0 01-.4-.1l-12-6.1-.1-.1c-.1 0-.1-.1-.2-.1a.35.35 0 01-.1-.2c0-.1-.1-.1-.1-.2V12.6a.37.37 0 01.1-.3v-.1c0-.1.1-.2.2-.3l.2-.2 8.7-5a.88.88 0 011.3.4 1 1 0 01-.4 1.4L3 12.6l9.9 5 9.9-5-7-4a1.11 1.11 0 01-.4-1.4.92.92 0 011.3-.4l8.6 4.9a.22.22 0 01.2.2c.1.1.1.2.2.3v.1c0 .1.1.2.1.3v12.3zM10.2 5.2a1 1 0 01-1.4-1.4L12.2.3c.1-.1.2-.2.3-.2a.37.37 0 01.3-.1h.1a.6.6 0 01.4.1.22.22 0 01.2.2h.1L17 3.8a1 1 0 010 1.4 1 1 0 01-1.4 0l-1.7-1.8v7.7a.94.94 0 01-1 1 1 1 0 01-1-1V3.4z"
        data-name="path-1"
      />
    </svg>
  );
};

Icons.set('product-delivery', ProductDelivery);
