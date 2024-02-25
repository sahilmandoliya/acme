import React from 'react'

const AppComp = () => {
  return (
        <div className=" dark:bg-gray-900">
            <div className="max-w-2xl mx-auto dark:text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Download Acme Note Now!</h3>
                    <p>Elevate your productivity with our intuitive app designed to simplify your workflow. Experience the power of Acme Note today and revolutionize the way you capture, organize, and share your ideas.</p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs dark:text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs dark:text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default AppComp;