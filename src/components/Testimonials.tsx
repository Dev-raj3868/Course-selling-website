
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Full-time Trader",
    image: "",
    content: "The courses at Dome of Money have completely transformed my trading approach. I've gone from random trades to having a structured strategy that actually works.",
    initials: "AS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Investor",
    image: "",
    content: "I've taken multiple courses from different platforms, but the quality of education here is exceptional. The instructors actually trade what they teach.",
    initials: "RK"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Part-time Trader",
    image: "",
    content: "The daily market analysis has been incredibly valuable. It's like having a professional trader guide you through the markets every single day.",
    initials: "PP"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">
          Hear from people who have transformed their trading journey with our courses and resources.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="feature-card">
            <CardContent className="p-6 relative">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
