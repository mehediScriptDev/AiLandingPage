import React from 'react';

const SectionTitle = ({title, align}) => {
    return (
        <div>
            <h1 className={`text-5xl text-white font-black font-primary leading-tight ${align}`}>
              {title}
            </h1>
        </div>
    );
};

export default SectionTitle;