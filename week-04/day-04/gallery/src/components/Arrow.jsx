import React from 'react';

export default function Arrow({ right }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: right?"rotate(0.5turn)":"rotate(0)" }} width="14.906" height="22.75" viewBox="0 0 14.906 22.75">
      <path transform="translate(-114.875 -289.125)" fillRule="evenodd" fill='#4e4e4e' d="M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z" />
    </svg>
  )
}
