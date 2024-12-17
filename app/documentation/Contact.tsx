import { Metadata } from "next";

export const metadata: Metadata ={
  title:"Learn About Autoswappr",
  description:"Discover how Autoswappr works. Learn how to swap your tokens without intermediaries. Get started with our comprehensive guide."
  }


export default function Contact(){
    return  <div className="grid gap-5 font-normal leading-6 text-sm">
    <h3 className="font-semibold text-sm leading-6">Community</h3>
    <ol className="list-decimal text-[#D2CED8CC] pl-4">
        <li>Discord: Join Here</li>
        <li>Telegram: Join Here</li>
    </ol>
</div>
}