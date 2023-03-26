import { Link } from "react-router-dom"

export default function school() {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>

            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Enter Insitution/School and Major
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  University 
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="                                                 University"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  hello
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="                                                     Major"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                
                 
              </div>

              <div className="text-sm">
                
              </div>
            </div>

            <div>
            <Link to="/search">
              <a
                className="group relative flex w-full justify-center rounded-md bg-green-400 py-2 px-3 text-sm font-semibold text-white hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }