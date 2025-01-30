export default function TechnicalSpecification(){
    return <div className="grid gap-5 text-[#DCDFE1]">
    <div className="grid gap-5 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">The Technical Specification</h3>
        <div>
        <h4 className="text-[#D2CED8CC]">1. Activate Auto-Swap:</h4>
        <ol className="list-disc text-[#D2CED8CC] pl-4 font-[400] text-[14px]">
            <li>Log in to your dashboard.</li>
            <li>Select your preferred stable token (e.g., USDT).</li>
            <li>Toggle the Auto-Swap feature to ON.</li>
        </ol>
        </div>
    </div>
    <div className="grid gap-5 font-normal leading-6 text-sm">
    <div className="text-[#D2CED8CC]">
    <h4>2.Receive Tokens:</h4>
        <ol className="list-disc text-[#D2CED8CC] pl-4 font-[400] text-[14px]">
            <li>Deposit tokens to your connected wallet.</li>
            <li>Autoswapper will automatically detect the incoming tokens and convert them to the chosen stable token.</li>
        </ol>
    </div>
    </div>
    <div className="grid gap-5 font-normal leading-6 text-sm">
      <div className="text-[#D2CED8CC]">
      <h4>3.View Swap History:</h4>
      <ol className="list-disc pl-4 font-[400] text-[14px]">
            <li>Navigate to the Transaction History tab.Navigate to the Transaction History tab.</li>
            <li>Details include:</li>
            <li>Received Token → Swapped Token, Percentage swapped, toggle on and off button.</li>
        </ol>
      </div>
    </div>
   
    <div className="grid gap-5 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Using the DEX Page</h3>
        <ol className="list-disc text-[#D2CED8CC] pl-4 font-[400] text-[14px]">
            <li>Navigate to the DEX tab.</li>
            <li>Select the token pair you wish to swap (e.g., ETH → USDC).</li>
            <li>Enter the amount to swap and review the estimated rate..</li>
            <li>Confirm the swap.</li>
            <li>Check the status in the ‘History Log’.</li>
        </ol>
    </div>
    </div>
}
