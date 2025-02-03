import React from 'react';
import { X } from 'lucide-react';

export function ImageDialog({ isOpen, onClose, imageUrl, alt }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative max-w-4xl  mx-4" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-gray-900 rounded-full p-1 hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6 " />
        </button>
        <img
          src={imageUrl}
          alt={alt}
          className="rounded-lg max-h-[80vh] object-contain bg-white"
        />
      </div>
    </div>
  );
}