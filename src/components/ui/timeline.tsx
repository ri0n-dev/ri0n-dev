interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => {
  return (
    <div className="relative flex items-start">
      <div className="absolute left-[7.5px] top-0 w-2 h-2 dark:bg-neutral-50 bg-neutral-600 shadow rounded-full mt-1.5 z-10"></div>
      <div className="ml-8">
        <p className="text-[10px] text-neutral-500">{date}</p>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative mx-auto max-w-md h-screen">
      <div className="absolute left-2.5 top-0 bottom-0 w-[3px] dark:bg-neutral-900 bg-neutral-200 z-5 mt-1.5"></div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;