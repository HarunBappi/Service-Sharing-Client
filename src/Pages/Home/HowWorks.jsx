import howWorks from "../../assets/howWorks.jpg";

export default function HowWorks() {
  return (
    <div>
      <div className="w-4/6 mx-auto pt-5"  data-aos="flip-left">
        <h1 className="text-3xl  text-gray-800 dark:text-white">
          -How it works
        </h1>
        <h3 className="text-2xl text-gray-500 mt-2 ">
          Easiest way to get a service.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:w-10/12 md:mx-auto gap-5 py-5 px-2 md:px-0">
        <div>
          <img className="rounded-md" src={howWorks} alt="" />
        </div>
        <div data-aos="zoom-out-up">
          {/* Select the Service */}
          <div className="flex items-center gap-4 h-28 rounded-md dark:shadow-2xl ">
            <div className="bg-sky-500 rounded-full p-3 w-10 h-10 flex items-center">
              <span className="text-2xl text-white">1</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                Select the Service
              </h2>
              <p className="text-base font-medium text-gray-700 dark:text-gray-500">
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>
          {/*  Pick your schedule */}
          <div className="flex items-center gap-4 h-28 rounded-md dark:shadow-2xl">
            <div className="bg-sky-500 rounded-full p-3 w-10 h-10 flex items-center">
              <span className="text-2xl text-white">2</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                Pick your schedule
              </h2>
              <p className="text-base font-medium text-gray-700 dark:text-gray-500">
                Pick your convenient date and time to avail the service. Pick
                the service provider based on their rating.
              </p>
            </div>
          </div>
          {/* Order & Relax */}
          <div className="flex items-center gap-4 h-28 rounded-md dark:shadow-2xl">
            <div className="bg-sky-500 rounded-full p-3 w-10 h-10 flex items-center">
              <span className="text-2xl text-white">3</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                Place Your Order & Relax
              </h2>
              <p className="text-base font-medium text-gray-700 dark:text-gray-500">
                Review and place the order. Now just sit back and relax. We’ll
                assign the expert service provider’s schedule for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
