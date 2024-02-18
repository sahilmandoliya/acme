import React from 'react'

const Features = () => {
    const features = [
        {
          Feature: "Rich Text Editing",
          Description: "Customize your notes with formatting options like bold, italic, bullet points, and more, making them visually appealing and easy to read."
        },
        {
          Feature: "Sync Across Devices",
          Description: "Access your notes seamlessly from any device, ensuring you're always connected and productive on the go."
        },
        {
          Feature: "Collaborative Editing",
          Description: "Work with colleagues or friends in real-time on the same note, fostering teamwork and productivity."
        },
        {
          Feature: "Cross-Platform Compatibility",
          Description: "Enjoy a consistent experience across different operating systems, ensuring flexibility and accessibility."
        },
        {
          Feature: "Organization and Tagging",
          Description: "Keep your notes organized with customizable tags, folders, and categories, enabling efficient retrieval and management."
        },
        {
          Feature: "Offline Access",
          Description: "Access your notes even without an internet connection, ensuring productivity regardless of your location."
        },
        {
          Feature: "Voice Recording and Transcription",
          Description: "Capture ideas with voice recording and let Acme Note transcribe them into text for easy reference and organization."
        },
        {
          Feature: "Security and Privacy",
          Description: "Protect your sensitive information with encryption and secure login methods, ensuring your notes remain private and confidential."
        }
    ];

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
                <p className="mt-4 text-lg dark:text-gray-400">Experience the power of Acme Note: the ultimate solution for effortless note-taking, organization, and collaboration.</p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                {features.map((feature, index) => (
                    <div className="flex" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                        <dt className="text-lg font-medium">{feature.Feature}</dt>
                        <dd className="mt-2 dark:text-gray-400">{feature.Description}</dd>
                        </div>
                    </div>
                ))}
            </dl>
        </div>
    </div>
    )
}

export default Features;