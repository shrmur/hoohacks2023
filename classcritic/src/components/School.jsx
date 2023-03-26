import { Link } from "react-router-dom"

export default function Example() {
    return (
        <form>
            <div className="space-y-12 content-center">

                <div className="border-b border-gray-900/10 pb-12 ">
                    <h1 className="text-base font-semibold leading-7 text-gray-900 text-center">School and Major</h1>
                    <p className="mt-1 text-sm leading-6 text-gray-600 text-center">Enter the name of your Schol and Major</p>

                    <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 text-center text-center">
                                School/Institution
                            </label>
                            <div className="mt-2 flex items-center ">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                Major
                            </label>
                            <div className="mt-2 flex items-center ">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <Link to="/search">
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Next
                                </a>

                        </div>
                        </Link>




                    </div>
                </div>
            </div>





        </form>
    )
}