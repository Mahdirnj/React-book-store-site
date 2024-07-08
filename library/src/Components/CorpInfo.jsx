

function CorpInfo({Email, Address, PhoneNum}) {
    return (

        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-900">
            <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-stone-700">Email address</dt>
                <dd className="text-lg font-semibold text-stone-900">{Email}</dd>
            </div>
            <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-700">Home address</dt>
                <dd className="text-lg font-semibold text-stone-900">{Address}</dd>
            </div>
            <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-700">Phone number</dt>
                <dd className="text-lg font-semibold text-stone-900">{PhoneNum}</dd>
            </div>
        </dl>

    )
}

export default CorpInfo;