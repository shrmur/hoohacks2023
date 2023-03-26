import image from "./shrish.png"

export default function Example() {
    return (
        <>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src={image}
                    alt=""
                />
            </a>
        </div>

       </nav>
        <div className="bg-white py-24 sm:py-32">
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Classes
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS310</a>
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS211</a>
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS100</a>
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS467</a>
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS491</a>
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CS471</a>
                </div>
                
                
                <h1>&nbsp;</h1>
                <h1>&nbsp;</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-center break-normal">

                    Want to add a class you dont see?     </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Click Here!
                    </a>


                </div>
            </div>
        </div>
        </>
    )
}