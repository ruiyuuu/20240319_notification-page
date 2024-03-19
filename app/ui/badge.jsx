import React from 'react'

export default function Badge({ unRead }) {
  return (
    <div className="text-[16px] font-bold px-3 py-0.5 bg-blue text-white rounded-[8px] w-fit h-fit">
      {unRead}
    </div>
  );
}
