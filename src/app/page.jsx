import Link from "next/link";

export default function Index() {
    return (
        <div className="relative px-6 lg:px-8 bg-gray-100">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl ">
                            House Index
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center ">
                        Welcome to House Index, your ultimate destination for finding the perfect home! 
                        Whether you're searching for a cozy apartment in the city or a spacious family house in the suburbs, 
                        we have a wide range of listings to suit every need and budget. 
                        Our user-friendly platform makes it easy to browse, compare, 
                        and select your dream home. With detailed descriptions, 
                        high-quality images, and virtual tours, you can explore properties from the comfort of your own home. 
                        Start your journey with House Index today and discover the home you've always wanted!
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center">
                            <Link href="/listings" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                                Find A Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
