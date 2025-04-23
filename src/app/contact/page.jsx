import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-screen bg-white">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-10 pt-28">

        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
               <div className="inline-flex align-middle justify-center items-center select-none text-black">
                   <Image src="/PHONE.svg" alt="PHONE" width={32} height={32} />
               </div>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
                Call Us
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> Our Phones are always open-unless we're closing.</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> 1-800-HUSTLE-UP </p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> (That’s 1-800-487-8538 if you’re the type that still dials like it’s 1995)</p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
                <div className="inline-flex align-middle justify-center items-center select-none text-black">
                    <div className="inline-flex align-middle justify-center items-center select-none text-black">
                    <Image src="/SMARTPHONE.svg" alt="SMARTPHONE" width={32} height={32} />
                </div>
                </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black">
                Text Us
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> For faster results than your lawyer can approve:</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> +1 (917) 555-FAST </p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span className="inline-block rounded-lg p-3">
                <div className="inline-flex align-middle justify-center items-center select-none text-black">
                    <div className="inline-flex align-middle justify-center items-center select-none text-black">
                        <Image src="/MAPPIN.svg" alt="PIN" width={32} height={32} />
                    </div>
                </div>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black"> Swing By the Office </h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> We’re somewhere between legal and legendary.</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> House Index HQ </p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> 234 Mirage Blvd, Suite 404</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> Somewhere Expensive, NY 10001</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> (Park in the back. Ask for Tony.)</p>
        </div>

        <div className="block rounded-xl border border-gray-800 p-4">
            <span  className="inline-block rounded-lg p-3">
               <div className="inline-flex align-middle justify-center items-center select-none text-black">
                    <div className="inline-flex align-middle justify-center items-center select-none text-black">
                        <Image src="/EMAIL.svg" alt="EMAIL" width={32} height={32} />
                    </div>
               </div>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black"> Email Us</h2>
            <p className="sm:mt-1 block text-sm sm:text-base text-black"> For paper trails that may or may not disappear:</p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> deals@houseindex.vip </p>
            <p className="sm:mt-1 block text-sm sm:text-base text-black font-light"> —use subject line “I Know a Guy” for priority response.</p>
        </div>
    </div>
</div>
    );
}