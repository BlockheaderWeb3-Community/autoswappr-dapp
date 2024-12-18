


export default function Faqs(){
    return <div className="grid gap-5">
    <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Q1: What happens if a token I receive isn’t supported?</h3>
        <p className="text-[#D2CED8CC]">Autoswapper will leave unsupported tokens untouched in your wallet. You can manually swap them using the DEX page.</p>
    </div>
    <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Q2: How are rates determined for automatic swaps?</h3>
        <p className="text-[#D2CED8CC]">Rates are fetched in real-time from multiple liquidity pools to ensure you receive the best available rate.</p>
    </div>
    <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Q3: Can I disable auto-swapping for specific tokens?</h3>
        <p className="text-[#D2CED8CC]">Yes, navigate to the Settings tab in your dashboard to exclude specific tokens from automatic swapping.</p>
    </div>
    <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Q4: What fees does Autoswapper charge?</h3>
        <p className="text-[#D2CED8CC]">We charge a flat 0.3% fee per automatic swap. DEX fees vary depending on the liquidity pool.</p>
    </div>
    </div>
}