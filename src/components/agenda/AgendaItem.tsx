import React from "react";

interface AgendaItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    time: Array<string>;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ icon: Icon, title, time }) => {

    const splitTime = (timeString: string) => {
        const [start, end] = timeString.split(" - ");
        return { start, end };
    }
    const isSingleTime = time.length === 1;

    return (
      <aside className="flex md:flex-col items-start md:items-center justify-center gap-4 md:gap-2 w-full md:w-[180px] hover:scale-105 transition-transform">
      <span className="h-14 min-w-14 max-w-14 border-2 border-primary-500 flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-primary-500" />}
      </span>
            <div className="flex flex-col md:gap-y-2 w-full items-start justify-start md:items-center text-center h-full">
                <p className="font-medium text-primary-800">{title}</p>
                {
                    time.map((timeString, index) => (
                        <time key={`time-${index}`} className={`flex gap-1 md:gap-0.5 lg:gap-x-2 lg:gap-y-1 ${isSingleTime ? "md:flex-col  lg:flex-row " : "md:flex-col lg:flex-row flex-wrap"} text-primary-600 justify-center text-sm leading-tight`}>
                            <span>{splitTime(timeString).start}</span>
                            {splitTime(timeString).end && <span aria-label="a" className="text-xs">-</span>}
                            <span>{splitTime(timeString).end}</span>
                        </time>
                    ))
                }
            </div>
        </aside>
    )
}

export default AgendaItem