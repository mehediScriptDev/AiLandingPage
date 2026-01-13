import React from 'react';

const HeroTitle = ({title}) => {
    return (
        <div>
            <h1 className={`text-5xl lg:text-6xl text-[#dbdbda] font-black font-primary leading-tight`}>
              {title}
            </h1>
        </div>
    );
};

export default HeroTitle;