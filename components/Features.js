export default function Features() {
  return (
    <div className="bg-gray-800 dark:bg-white relative">
      <div className="container mx-auto max-w-7xl z-10 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 text-gray-300 dark:text-gray-800 flex flex-col justify-center py-4 md:py-20 xl:py-40">
            <div className="mb-8 md:mb-20">
              <p className="font-heading font-bold uppercase mb-3 text-xl text-gray-50 dark:text-gray-800">
                Our Company
              </p>
              <h2 className="text-gray-200 dark:text-gray-800 mb-5 text-3xl md:text-5xl">
                21st Century Technology
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-800">
                Thermosave brings the solutions of all heat losses by bringing the removatble
                thermal jackets based on self extengutior thermal cloths, and cutting edge electric
                heaters line-up for advance needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {stats.map((stat) => (
                <div key={stat.title}>
                  <p className="font-heading text-3xl mb-3">{stat.title}</p>
                  <p className="text-xl">{stat.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const StatsText = ({ children }) => (
  <span className="font-bold text-gray-100 dark:text-gray-600">{children}</span>
)

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Years Of Excellence</StatsText> in polymer industry, saving cost and energy every
        day.
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Service</StatsText> provided to the clients throughout the year.
      </>
    ),
  },
  {
    title: '20%+',
    content: (
      <>
        <StatsText>Energy Saving</StatsText>recorded in high energy consuming machines
      </>
    ),
  },
  {
    title: '100+',
    content: (
      <>
        <StatsText>Satisfied Clients</StatsText> thorughout Pakistan with collaboration extending
        soon to China.
      </>
    ),
  },
]
