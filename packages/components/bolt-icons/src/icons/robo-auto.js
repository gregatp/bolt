import * as Icons from '@bolt/components-icon/registry';
import { h } from '@bolt/core/renderers';

export const RoboAuto = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg data-name="Layer 1" {...otherProps} viewBox="0 0 32.1 32.2">
      <path
        fill={bgColor}
        fill-rule="evenodd"
        d="M20 15h2v-2h-2zm0-4h-2v6h6v-6h-4zm-10 4h2v-2h-2zm4 2v-6H8v6h6zm-3 6h10v-2H11zm17.1 0a3.08 3.08 0 01-3 3H7a2.88 2.88 0 01-2.1-.9A2.88 2.88 0 014 23V9a2.88 2.88 0 01.9-2.1A2.88 2.88 0 017 6h18.1a2.88 2.88 0 012.1.9 2.88 2.88 0 01.9 2.1zM12 30.2h8v-2h-8zm19.7-19.4a.91.91 0 00-.7-.3h-1V9a4.54 4.54 0 00-1.5-3.5A4.85 4.85 0 0025 4h-8V2h1a1.08 1.08 0 00.7-.3.91.91 0 00.3-.7.91.91 0 00-.3-.7A1.08 1.08 0 0018 0h-4.1a1.08 1.08 0 00-.7.3.91.91 0 00-.3.7.91.91 0 00.3.7 1.33 1.33 0 00.7.3h1v2H7a4.54 4.54 0 00-3.5 1.5A4.54 4.54 0 002 9v1H1c-.7 0-1 .3-1 1v8c0 .7.3 1 1 1h1v3a4.54 4.54 0 001.5 3.5A4.85 4.85 0 007 28h3v4.2h12V28h3.1a4.54 4.54 0 003.5-1.5 4.85 4.85 0 001.5-3.5v-3h1a1.08 1.08 0 00.7-.3.91.91 0 00.3-.7v-7.6a2.09 2.09 0 00-.4-.6z"
        data-name="Page-1"
      />
    </svg>
  );
};

Icons.set('robo-auto', RoboAuto);
