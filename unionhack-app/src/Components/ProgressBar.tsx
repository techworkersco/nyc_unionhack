import React from 'react';

export const ProgressBar = (props: {className: string, percentage: number}) => (
  <div className={`progress bg-grey br-4 ${props.className}`}>
    <span
      className='progress bg-white absolute br-4'
      style={{width: `${props.percentage}%`}}
    />
  </div>
);
