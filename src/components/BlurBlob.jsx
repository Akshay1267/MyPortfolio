import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = "bg-amber-400" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none z-0"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-full h-full ${color} rounded-full opacity-[0.14] blur-[90px] animate-blob`}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

export default BlurBlob;
