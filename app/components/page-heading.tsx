interface PageHeadingProps {
  title: string;
  subTitle: string;
  isCenter?: boolean;
}

export default function PageHeading({
  title,
  subTitle,
  isCenter = false,
}: PageHeadingProps) {
  return (
    <div
      className={`w-full max-w-[704px] py-2 ${isCenter && "mx-auto text-center"}`}
    >
      <h1 className="text-xl font-semibold mb-2 text-[#F3F5FF]">{title}</h1>
      <p
        className={`text-[#DCDFE1] ${!isCenter && "max-w-[600px]"} text-base leading-[22px]`}
      >
        {subTitle}
      </p>
    </div>
  );
}
