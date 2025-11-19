const AgendaItem = ({ icon: Icon, title, time }) => {
    const [start, end] = time.split(" - ");

    return (
      <aside className="flex flex-col items-center text-center gap-2 w-[180px] hover:scale-105 transition-transform">
      <span className="h-14 w-14 border-2 border-primary-500 flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-primary-500" />}
      </span>
            <p className="font-medium text-primary-800">{title}</p>
          <time className="flex flex-col items-center text-primary-600 text-sm leading-tight">
              <span>{start}</span>
              {end && <span className="text-xs">-</span>}
              <span>{end}</span>
          </time>
        </aside>
    )
}

export default AgendaItem