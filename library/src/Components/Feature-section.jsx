import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Fast delivery :',
        description:
            ' In joyBook we focus on delivery. We want it to be fast that you never lose your momentum  .',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Secure shopping :',
        description: 'With the experience that we gathered in the last 2 decade we guarantee that every action is safe ',
        icon: LockClosedIcon,
    },
    {
        name: 'Database of Books :',
        description: 'We were in this industry for more than 2 decade. So we know that how to find every book that is even unique and hard to find',
        icon: ServerIcon,
    },
]

function FeatureSection() {
    return (
        <div>
            <div
                className="overflow-hidden bg-violet-900 border-b-2 border-t-2 border-b-white border-t-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-200">Deliver faster</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-emerald-300 sm:text-4xl">A
                                    better
                                    workflow</p>
                                <p className="mt-6 text-lg leading-8 text-white">
                                    In joyBook we focus on delivering unique and elegant books to our book
                                    lovers all around the world and help them to have a best experience
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-violet-100 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-yellow-200">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-emerald-300"
                                                              aria-hidden="true"/>
                                                {feature.name}
                                            </dt>
                                            {' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;