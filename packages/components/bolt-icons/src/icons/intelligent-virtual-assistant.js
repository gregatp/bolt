
  import { h } from '@bolt/core';

  export const IntelligentVirtualAssistant = ({ bgColor, fgColor, size, ...otherProps }) => {
      return (
        <svg {...otherProps} viewBox="0 0 32 32"><path fill={bgColor} fill-rule="evenodd" d="M28.5 14.5c0-.416-.146-.771-.437-1.062A1.448 1.448 0 0 0 27 13c-.417 0-.771.146-1.063.438A1.448 1.448 0 0 0 25.5 14.5v3c0 .417.146.771.437 1.062.292.292.646.438 1.063.438.416 0 .771-.146 1.063-.438.291-.291.437-.645.437-1.062v-3zM20 28c0-.666-.334-1-1-1h-2c-.667 0-1 .334-1 1 0 .667.333 1 1 1h2c.666 0 1-.333 1-1zM6.5 14.5c0-.416-.146-.771-.437-1.062A1.448 1.448 0 0 0 5 13c-.417 0-.771.146-1.062.438A1.445 1.445 0 0 0 3.5 14.5v3c0 .417.146.771.438 1.062.291.292.645.438 1.062.438.416 0 .771-.146 1.063-.438.291-.291.437-.645.437-1.062v-3zm25.188-1.187c.208.208.312.437.312.687v4c0 .667-.334 1-1 1h-.813c-.5 1.042-1.312 1.687-2.437 1.937-.792 3.417-2.729 5.98-5.812 7.688a3.042 3.042 0 0 1-1.063 1.719A2.902 2.902 0 0 1 19 31h-2a2.889 2.889 0 0 1-2.125-.875A2.889 2.889 0 0 1 14 28c0-.833.291-1.541.875-2.125A2.893 2.893 0 0 1 17 25h2c1.166 0 2.041.5 2.625 1.5 2.083-1.333 3.458-3.25 4.125-5.75-1.5-.541-2.25-1.625-2.25-3.25v-3c0-.75.219-1.437.656-2.063a3.13 3.13 0 0 1 1.719-1.25c-.334-2.333-1.386-4.281-3.156-5.843C20.947 3.781 18.875 3 16.5 3h-1c-2.375 0-4.448.781-6.219 2.344-1.771 1.562-2.823 3.51-3.156 5.843a3.133 3.133 0 0 1 1.719 1.25c.437.626.656 1.313.656 2.063v3c0 .834-.261 1.562-.781 2.187a3.413 3.413 0 0 1-1.969 1.188 3.19 3.19 0 0 1-2.281-.219A3.242 3.242 0 0 1 1.875 19H1c-.667 0-1-.333-1-1v-4c0-.666.333-1 1-1h.875c.458-1 1.188-1.625 2.188-1.875.333-2.875 1.593-5.281 3.781-7.219C10.031 1.969 12.583 1 15.5 1h1c2.916 0 5.469.969 7.656 2.906 2.188 1.938 3.448 4.344 3.782 7.219.999.25 1.728.875 2.187 1.875H31c.25 0 .479.104.688.313z"/></svg>
      )
};
