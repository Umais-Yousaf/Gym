import React, { useState } from 'react'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);


    const plans = [
        {
            name: "Beginner Plan",
            monthly: 1200,
            yearly: 14400,
            description: "Best for beginners to start their fitness journey.",
            features: [
                { text: "Access to basic equipment", available: true },
                { text: "Without Trainer", available: false },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: false },
            ],
        },
        {
            name: "Premium Plan",
            monthly:2500,
            yearly: 30000,
            description: "Perfect for advanced users with extra perks.",
            features: [
                { text: "Access to all equipment + Cardio", available: true },
                { text: "No personal training", available: false },
                { text: "Dietary consultation", available: false },
                { text: "Access to premium classes", available: true },
            ],
        },
        {
            name: "Pro Plan",
            monthly: 6200,
            yearly:74400,
            description: "Ideal for professionals aiming for peak performance.",
            features: [
                { text: "Unlimited gym access", available: true },
                { text: "Daily personal trainer", available: true },
                { text: "Advanced dietary consultation", available: true },
                { text: "Exclusive premium classes", available: true },
            ],
        },
    ];

    return (
        <div className='bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4
        md:px-8 lg:px-16'>
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
                from-purple-400  to-pink-300'>Pricing plan</h2>
                <p className='text-lg text-gray-400 mt-3'>
                    Choose the plan that fits you best.

                </p>

            </div>
            {/*toggle button*/}
            <div className='flex justify-center gap-4 mb-12'>
                <button className={`px-6 py-3 rounded-full font-semibold text-lg ${!isYearly? "bg-pink-400 text-white" : "bg-gray-700 text-gray-300"}`}
                onClick={() => setIsYearly(false)}>
                    Monthly </button>

                    <button className={`px-6 py-3 rounded-full font-semibold text-lg ${isYearly? "bg-pink-400 text-white" : "bg-gray-700 text-gray-300"}`}
                onClick={() => setIsYearly(true)}>
                    Yearly </button>

            </div>
            {/*pricing cards*/}
            <div className='flex flex-wrap justify-center gap-6'>
                {plans.map((plan, index) => (
                    <div key={index}
                    className={`relative border-4 hover:shadow-2xl hover:border-pink-600
                    max-w-sm w-full bg-gray-600 p-8 rounded-2xl shadow-lg transform transition-all
                    duration-500 ${index === 1 ?  "hover:scale-105 border-4 bg-gray-700" : "border-2 border-gray-600"} 
                    hover:scale-105 hover:shadow-2xl hover:border-pink-600`}>
                        <h3 className='text-2xl font-bold mb-4 text-white '>
                            {plan.name}

                        </h3>
                        <p className='text-lg text-gray-300 mb-6'>{plan.description}</p>
                        <p className='text-4xl font-extrabold text-white mb-4'>
                           {isYearly? plan.yearly : plan.monthly} {' '}
                            <span className='text-lg font-medium text-gray-300'>
                                / {isYearly? "Year" : "Month"}
                            </span>
                        </p>
                        <ul className='space-y-3 mb-6'>
                            {plan.features.map((feature, i) => (
                                <li key={i} className='flex items-center  gap-3'>
                                    {feature.available ? (
                                        <span className='w-6 h-6 bg-green-400 rounded-full
                                        flex items-center justify-center text-white'> 
                                        &#x2713;
                                       </span>
                                    ): (<span className='w-6 h-6 bg-red-600 rounded-full
                                        flex items-center justify-center text-white'> 
                                        &#x2717;
                                       </span>
                                    )}
                                    <span className='text-gray-300'>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}

                        </ul>
                        <button className='w-full bg-pink-400 text-white py-3 rounded-full
                        font-semibold  text-lg hover:bg-purple-500 transition duration-300'>
                            Choose your Plan

                        </button>

                    </div>
                ))}

            </div>

        </div>
    )
}


export default Pricing
