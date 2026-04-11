
import React from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="text-6xl font-bold text-primary/20" style={{fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em'}}>
          {number.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-prose">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
