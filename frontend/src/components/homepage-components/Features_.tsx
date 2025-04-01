const Features_ = () => {

  const features = [
    {
      icon: "/images/shield.svg",
      title: "All-in-One App",
      description:
        "Chat, share files, and manage tasks in one place—no more switching between apps.",
    },
    {
      icon: "/images/message.svg",
      title: "Organized Conversations",
      description:
        "Use threads and channels to keep chats clear and easy to follow, so nothing gets lost.",
    },
    {
      icon: "/images/notification.svg",
      title: "Instant Notifications",
      description:
        "Get timely reminders for urgent messages or upcoming deadlines, so your team never misses a beat.",
    },
    {
      icon: "/images/people-share.svg",
      title: "Easy File Sharing",
      description: "Upload and find files quickly, so you don’t waste time searching for documents or images.",
    },
    {
      icon: "/images/organization-line.svg",
      title: "AI Helpers",
      description:
        "Hop between organizations without logging out. Perfect for multi-team pros.",
    },
    {
      icon: "/images/sparkle.svg",
      title: "Affordable for Small Businesses",
      description: "Everything you need, redesigned for speed and simplicity.",
    },
  ];

  return (
    <div className="px-2 sm:px-10 lg:px-24">
      <div className="flex flex-col justify-between items-center gap-8 container">
        <div className="flex items-center flex-col space-y-2 text-center w-[95%] md:w-[70%] lg:w-[60%] mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why Choose <span className="text-blue-950">CampusConnect</span>
          </h1>
          <p className="font-semibold w-[95%] sm:w-[70%] text-sm sm:text-lg">
          CampusConnect is the  Tool for Team collaboration and Workplace Communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 place-items-center">
          {features.map((feature, index) => (
            <div className="w-full space-y-2" key={index}>
                <div className="flex justify-center">
                    <img src={feature.icon} alt="icon" className="max-sm:w-9 w-16 h-16" />
                </div>
                <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm">
                        {feature.description}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features_;
