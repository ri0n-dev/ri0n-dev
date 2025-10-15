import Timeline from "@/components/ui/timeline"

export function Team() {
  const timelineItems = [
    {
      date: 'Jun 7, 2021',
      title: 'Zisty',
      description: 'I founded Zisty and currently serve as its owner.'
    }
  ];

  return (
    <div className="container mx-auto p-4 mt-20 h-full">
      <Timeline items={timelineItems} />
    </div>
  );
}
