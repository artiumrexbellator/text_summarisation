import React from 'react';
import { Switcher } from './Switcher';

export const Header: React.FC = () => {
    return (
        <header className="dark:text-gray-400 bg-gray-300 dark:bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <a className="flex title-font font-medium items-center dark:text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Nlp project</span>
                </a>
                <Switcher />

            </div>
        </header>
    )
}