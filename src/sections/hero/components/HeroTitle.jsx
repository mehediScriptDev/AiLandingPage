import React from 'react';

const HeroTitle = ({title}) => {
    return (
        <div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl text-primaryText font-black font-primary leading-tight`}>
              {title}
            </h1>
        </div>
    );
};

export default HeroTitle;