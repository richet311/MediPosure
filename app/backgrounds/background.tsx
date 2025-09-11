import React from 'react'

const background = () => {
  return (
  <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-950 dark:to-indigo-900" />
    <div className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-soft-light">
      <svg className="absolute inset-0 h-full w-full">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
</div>
  )
}

export default background