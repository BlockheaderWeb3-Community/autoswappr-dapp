"use client";
export default function GiveFeedback() {
  return (
    <div className="w-full flex flex-row items-end justify-end pr-8 xl:pr-12 pb-12 absolute top-[90vh] right-10">
      <button
        type="button"
        className="flex flex-none w-auto py-[12px] px-[16px] sm:px-[20px] border-[1px] border-[#2C3035] rounded-[8px] items-center justify-center space-x-2.5"
      >
        <img
          src="/customer-service.svg"
          className="w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]"
          alt="feedback"
        />
        <span className="font-[400] text-[14px] text-[#979FA5]">
          Give Feedback
        </span>
      </button>
    </div>
  );
}
