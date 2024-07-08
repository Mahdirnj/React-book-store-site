import React, {useState,useEffect} from 'react';


function Stats({fHead, fDesc, secHead, secDesc, thrdHead, thrdDesc}) {

    return (
        <div className="py-24 bg-amber-100 border-t border-b-inherit rounded-3xl mb-5 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-9 flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-black">{fHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-lime-400 sm:text-5xl">{fDesc}
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-black">{secHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-lime-400 sm:text-5xl">{secDesc}
                        </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 font-mono text-black">{thrdHead}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-lime-400 sm:text-5xl">{thrdDesc}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Stats;