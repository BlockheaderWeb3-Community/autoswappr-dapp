import React from 'react';
import plus from '@/public/plusIcon.svg'
import Image from 'next/image';
const AdditionalButton = () => {
  return (
    <button className="bg-transparent  text-white py-4 px-16 border border-[#0F96E3] rounded-[900px] text-sm  transition-colors duration-300 flex items-center gap-2">
      <Image src={plus} alt='plus' width={32} height={32} className='bg-[#100827] rounded-full p-2'/>

      Add Tokens
    </button>
  );
};

export default AdditionalButton;