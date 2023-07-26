"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const LandingContent = () => {
  const testimonials = [
    {
      name: "Manuel",
      avatar: "A",
      title: "Web Developer",
      description: "This is the best application I've used!",
    },
    {
      name: "Pedro",
      avatar: "B",
      title: "Full Stack Web Developer ",
      description: "I love this application!",
    },
    {
      name: "Eduardo",
      avatar: "C",
      title: "Software Engineer",
      description: " Genius AI has changed my life!",
    },
    {
      name: "Luis",
      avatar: "D",
      title: "Software Engineer",
      description:
        "Thanks to Genius AI I have been able to generate great and fast content for my blog!",
    },
  ];

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
