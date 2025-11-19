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
      <aside className="flex flex-col items-center text-center gap-2 w-[180px] hover:scale-105 transition-transform">
      <span className="h-14 w-14 border-2 border-primary-500 flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-primary-500" />}
      </span>
            <p className="font-medium text-primary-800">{title}</p>
          {
              time.map((timeString, index) => (
                  <time key={`time-${index}`} className={`flex ${isSingleTime ? "flex-col" : "flex-row flex-wrap gap-2"} items-center text-primary-600 text-sm leading-tight`}>
                      <span>{splitTime(timeString).start}</span>
                      {splitTime(timeString).end && <span className="text-xs">-</span>}
                      <span>{splitTime(timeString).end}</span>
                  </time>
              ))
          }
        </aside>
    )
}

export default AgendaItem