import Image from "next/image";

export default function About() {
    return (
        <div className="relative px-6 lg:px-8 dark:bg-gray-800">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl dark:text-gray-100">
                            About Us
                        </h1>
                        <h1 className="text-l font-bold tracking-tight text-center sm:text-xl dark:text-gray-100">
                                “They said I couldn’t sell a condemned building in a swamp. I sold it twice.” – Vinny Morello, Founder, Closer, Visionary
                        </h1>
                        
                        <div className="mt-8 flex md:flex-row flex-col gap-x-4 justify-center items-center">
                            <Image src="/REAPIC.jpg" alt="House Index" className="flex rounded-lg shadow-lg" width={250} height={150} />
                            <div>
                                
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
                                At House Index, we don’t sell houses—we move dreams, investments, and assets disguised as drywall.
                                Founded by Vinny Morello after a completely voluntary exit from a top firm (some may say "forced resignation," we prefer “creative divergence”), House Index was built on one principle: Make. The. Deal. Doesn’t matter if it’s a penthouse in the sky or a fixer-upper with three walls—we’ll sell it, flip it, or flip it again before the paperwork finishes printing.
                                Vinny saw the market as a jungle—and while everyone else was playing real estate agent, he became a lion. A loud, smooth-talking, espresso-fueled lion with a Rolodex full of millionaires, moguls, and more than a few people who "prefer to stay off the books."
                                We specialize in:
                                Off-market listings that technically shouldn’t be available
                                Creative financing that might require a burner phone
                                Luxury homes you can’t find on Zillow (or Google, for that matter)
                                Investment properties with a little risk and a whole lotta reward
                                We don’t follow trends—we start them. And if there’s a loophole, we’re already three steps through it.
                                House Index: Because the American Dream doesn’t come with a manual—it comes with a signature and a wink.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}