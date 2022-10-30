import React from "react";

import PrimaryButton from "../component/PrimaryButton";
import Testimonial from "../component/Testimonial";

import avatar1 from "../asset/images/avatar-anisha.png";
import avatar2 from "../asset/images/avatar-ali.png";
import avatar3 from "../asset/images/avatar-richard.png";

function TestimonialsSection() {
  const testimonials = [
    {
      image: avatar1,
      name: "Anisha Li",
      content:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      image: avatar2,
      name: "Ali Bravo",
      content:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      image: avatar3,
      name: "Richard Watts",
      content:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
  ];
  return (
    <section id="testimonials">
      <div className="max-w-6xl mx-auto px-5 mt-32 text-center ">
        <h2 className="font-bold text-4xl text-darkBlue">What they've said</h2>
        {/* Testimonials container*/}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.map((entry, index) => (
            <Testimonial name={entry.name} image={entry.image} key={index}>
              {entry.content}
            </Testimonial>
          ))}
        </div>

        {/* CTA Button */}
        <div className="my-16">
          <PrimaryButton className="mx-auto">Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
