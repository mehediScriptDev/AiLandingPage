import { Sparkles } from 'lucide-react';
import React from 'react';

const SectionBadge = ({text}) => {
    return (
        <div className="inline-flex items-center gap-2 bg-black backdrop-blur-3xl border-gradient-r from-red-300 via-black to-primary rounded-full px-3 py-1">
            {" "}
            <Sparkles className="w-3 h-3 text-white" />{" "}
            <span className="text-[10px] font-medium"> {text}</span>{" "}
          </div>
    );
};

export default SectionBadge;