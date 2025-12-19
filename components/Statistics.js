export default function Statistics() {
  return (
    <div className="bg-gray-800 dark:bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto py-10 sm:py-20 px-2 sm:px-12 md:px-17 text-gray-300 dark:text-gray-800">
          <p className="text-center">
            Thermosave is dedicated to come up with solutions to all the heat losses issues in the
            industries by 2030
          </p>
          <h1 className="text-center text-4xl pb-10 font-bold">What is our company doing?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 text-gray-300 dark:text-gray-800">
            <div className="px-4 md:px-8 py-5 shadow-xl border border-gray-500 dark:border-gray-800 rounded-lg">
              <p className="font-medium truncate text-gray-300 dark:text-gray-800">We serve</p>
              <p className="text-2xl font-medium text-gray-300 dark:text-gray-800">
                200+ companies
              </p>
            </div>
            <div className="px-4 md:px-8 py-5 shadow-xl border border-gray-500 dark:border-gray-800 rounded-lg">
              <p className="font-medium truncate text-gray-300 dark:text-gray-800">In</p>
              <p className="text-2xl font-medium text-gray-300 dark:text-gray-800">
                15 different cities
              </p>
            </div>
            <div className="px-4 md:px-8 py-5 shadow-xl border border-gray-500 dark:border-gray-800 rounded-lg">
              <p className="font-medium truncate text-gray-300 dark:text-gray-800">with</p>
              <p className="text-2xl font-medium text-gray-300 dark:text-gray-800">
                6+ custom products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
