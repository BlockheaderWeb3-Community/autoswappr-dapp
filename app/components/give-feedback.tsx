"use client";
const GiveFeedback = () => {
  return (
    <div className="absolute bottom-10 right-10">
      <button
        type="button"
        className="flex flex-none w-auto py-[12px] px-[20px] border-[1px] border-[#2C3035] rounded-[8px] items-center justify-center space-x-2.5"
      >
        <img
          src="/customer-service.svg"
          className="w-[16px] h-[16px]"
          alt="feedback"
        />
        <span className="font-[400] text-[14px] text-[#979FA5]">
          Give Feedback
        </span>
      </button>
    </div>
  );
};

export default GiveFeedback;
