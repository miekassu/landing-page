import { MyButton } from '../components/Button';

export const Timeline = () => {

  return (

    <section>
      <div className="bg-white text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h1 className="mr-8 w-full mb-6 text-5xl font-extrabold leading-9">
              Work In Progress
            </h1>
            <p className="text-sm md:text-base text-gray-800 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            <div className="flex items-center justify-start">
              <MyButton name="Join Now?" color="blue"/>
            </div>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute h-full border timeline-border"/>
                <div className="border-2-2 absolute h-full border timeline-border"/>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"/>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-800">1-6 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Pick your favourite event(s) and register in that event by filling the form corresponding to that
                      event. Its that easy :)
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"/>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-gray-800">6-9 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      Participate online. The links for your registered events will be sent to you via email and whatsapp
                      groups. Use those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"/>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-gray-800"> 10 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                      announced on the whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"/>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-gray-800">12 May, 2021</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-800 text-opacity-100">
                      The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                      their addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt={'finally'}/>
            </div>
          </div>
        </div>
      </div>
    </section>

  );

};