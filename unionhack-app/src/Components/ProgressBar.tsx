import React from 'react';

export const ProgressBar = (props: {className: string, percentage: number}) => (
  <div className={props.className}>
    <div className="progress bg-grey br-4 mb-3">
      <span
        className='progress bg-green absolute br-4'
        style={{width: `${props.percentage}%`}}
      />
    </div>
    <div className='flex items-center'>
      <div>
        <b className='fs2 green'>
          {props.percentage}% Current Support
        </b>
      </div>
      <div className="col text-right">
        <b className='fs2 white'>
          85% Goal
        </b>
      </div>
    </div>
  </div>
);
