import Image from "next/image";

export default function Contact() {
    return (
        <div className="h-screen mx-auto max-w-3xl pt-10 pb-32 sm:pb-40 bg-gray100">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  p-10">

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
                    <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> 1-800-487-8538 </p>
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
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> For faster results than your lawyer can approve.</p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> +1 (917) 555-1563 </p>
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
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> We're open when you need us</p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> House Index HQ </p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> 123 Road Blvd, Suite 404</p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> Seattle, WA 98101</p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> (Park in the back)</p>
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
                    <p className="sm:mt-1 block text-sm sm:text-base text-black"> Email us if you have more complex requests</p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black font-bold"> deals@houseindex.vip </p>
                    <p className="sm:mt-1 block text-sm sm:text-base text-black font-light"> —use subject line “Help needed” for priority response.</p>
                </div>
            </div>
        </div>
    );
}