import { MyButton } from '../components/Button';

export const Subscribe = () => {
  return (
    <div className="bg-blue-500 flex items-center justify-center">
      <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800 font-light">
        <div className="w-full max-w-6xl mx-auto pb-5">
          <div className="-mx-3 md:flex items-center">
            <div className="px-3 md:w-2/3 mb-10 md:mb-0">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-left text-gray-800">
                Stay Updated
              </h1>
              <h3 className="text-gray-600 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
              <div>
                <span className="inline-block w-40 h-1 rounded-full bg-blue-900"/>
                <span className="inline-block w-3 h-1 rounded-full bg-blue-800 ml-1"/>
                <span className="inline-block w-1 h-1 rounded-full bg-blue-700 ml-1"/>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <form>
                <div className="flex mb-3">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"/>
                  </div>
                  <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="email@example.com"/>
                </div>
                <MyButton name='Subscribe Now'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
};