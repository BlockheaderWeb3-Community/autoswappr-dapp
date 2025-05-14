const FeatureCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="py-6 flex flex-col items-center text-center md:items-start md:text-left">
    <img src={image} className="w-[350px] md:w-auto mb-7 md:mb-[60px]" alt="" />
    <div className="max-w-[360px] py-4">
      <h5 className="mb-3 md:mb-4 text-[#F3F5FF] text-sm md:text-xl font-medium">
        {title}
      </h5>
      <p className="text-xs md:text-sm text-[#DCDFE1] h-[60px]">
        {description}
      </p>
    </div>
  </div>
);

const Divider = () => (
  <div
    className="hidden lg:flex w-[2px] h-[235px] bg-[#1E2021] rounded-full"
    role="presentation"
    aria-hidden="true"
  />
);

function WhyAutoSwappr() {
  return (
    <div className="md:py-[60px] py-10 px-6 md:px-[75px]">
      <h2 className="text-xl md:text-[32px] text-center md:text-left font-semibold text-[#F3F5FF] mb-3 md:mb-4">
        Why AutoSwappr?
      </h2>
      <div className="flex gap-x-3 text-center">
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm bg-[#1E2021] text-[#F3F5FF] flex-1 md:flex-none">
          Security
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF] flex-1 md:flex-none">
          Transparency
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF] flex-1 md:flex-none">
          Efficiency
        </div>
      </div>

      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr] mt-7 md:mt-[68px] items-end gap-x-[52px]">
        <FeatureCard
          image="/dot-pattern-1.svg"
          title="Security"
          description="Security is at the core of Autoswappr. Your assets are protected by audited smart contracts and industry-best practices at every step."
        />
        <Divider />
        <FeatureCard
          image="/dot-pattern-2.svg"
          title="Transparency"
          description="Fill out the short form by inputting the amount of STRK tokens you want to automatically swap to USDT."
        />
        <Divider />
        <FeatureCard
          image="/dot-pattern-3.svg"
          title="Efficiency"
          description="Security is at the core of Autoswappr. Your assets are protected by audited smart contracts and industry-best practices at every step."
        />
      </div>
    </div>
  );
}

export default WhyAutoSwappr;
