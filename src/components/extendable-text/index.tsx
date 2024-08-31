'use client';
import React, { useState } from 'react';

const ExtendableText = ({ text }: { text: string }) => {
  const limit = 255;
  const [isExtendable, setIsExtendable] = useState(false);
  return (
    <div className="mx-auto flex h-[100vh] max-w-lg flex-col items-center justify-center">
      <p>
        {text.length > limit && !isExtendable
          ? text.substring(0, limit) + '...'
          : text}
      </p>
      {text.length > limit && (
        <button
          onClick={() => setIsExtendable((prev) => !prev)}
          className="rounded-md bg-purple-700 p-2 text-white"
        >
          {isExtendable ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ExtendableText;
