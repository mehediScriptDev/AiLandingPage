import { Sparkles } from 'lucide-react';

const SectionBadge = ({text}) => {
    return (
        <div className="inline-flex items-center gap-2 text-white bg-black backdrop-blur-3xl border-t border-primary rounded-full px-3 py-1">
            {" "}
            <Sparkles className="w-3 h-3 text-white" />{" "}
            <span className="text-xs lg:text-sm font-medium"> {text}</span>{" "}
          </div>
    );
};

export default SectionBadge;