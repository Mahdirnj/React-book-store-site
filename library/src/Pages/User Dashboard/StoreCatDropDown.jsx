// src/StoreCatDropDown.jsx
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function StoreCatDropDown({ setSelectedCategory }) {
    const [selectedCategoryLabel, setSelectedCategoryLabel] = useState('All Books');

    const categories = [
        'All Books',
        'Novel',
        'Medical',
        'Sci-Fi',
        'Romance',
        'Horror',
        'Adventure'
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategoryLabel(category);
        setSelectedCategory(category);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedCategoryLabel}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
            </div>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {categories.map((category, index) => (
                            <MenuItem key={index}>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleCategoryClick(category)}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        {category}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    );
}

export default StoreCatDropDown;
