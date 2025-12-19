import { FaCheckCircle } from 'react-icons/fa'
import SendAMessage from '@/components/SendAMessage'

const options = [
  { id: 1, desc: 'Initial Visits' },
  { id: 2, desc: 'Quotes & Estimates' },
  { id: 3, desc: 'Plan Of Action' },
]

const PackageTier = ({ title, options, typePlan, checked = false }) => {
  return (
    <div className="grid py-2 grid-cols-1 md:grid-cols-4 gap-2">
      <h3 className="text-center md:text-left text-lg font-semibold">{title}</h3>
      <ul className="space-y-3 text-start">
        {options.map((desc) => (
          <li key={desc.id} className="text-center md:text-left flex items-center gap-2">
            <FaCheckCircle className="text-red-500 flex-shrink-0" />
            <span>{desc.desc}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-center md:text-left text-xl font-semibold">{typePlan}</h3>
      <SendAMessage />
    </div>
  )
}

const PortfolioIntroductionSummary = () => {
  return (
    <div id="test" className="flex justify-center items-center h-[70vh] w-full flex-col space-y-4">
      <div className="flex flex-col md:flex-row p-5 items-center justify-start md:justify-around w-full">
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h2 className="text-lg font-semibold">
            The Right Plan for <span className="text-red-500">Your Business</span>
          </h2>
        </div>
        <div className="w-full md:w-[60%]">
          <p className="text-center md:text-left">
            Contact Us today to get our consultant visit your work-space and inspect the
            possiblities of our heat-efficient solutions. Helping you save cost and energy
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
      <PackageTier title={'Inspection'} typePlan="Free" options={options} />
    </div>
  )
}

export default PortfolioIntroductionSummary
