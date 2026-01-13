import React from 'react';

const SectionSubTitle = ({subtitle}) => {
    return (
        <div>
            <p className="lg:text-lg text-sm text-gray-300 leading-tight max-w-xl">
              
              {subtitle}
            </p>
        </div>
    );
};

export default SectionSubTitle;