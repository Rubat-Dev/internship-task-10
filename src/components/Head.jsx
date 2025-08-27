import React from 'react'

const Head = ({ title, desc }) => {
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
        {desc}
      </p>
    </div>
  )
}

export default Head
