import { Quote } from "lucide-react";
import { PortfolioData, testimonialType } from "@/types/portfolio";


const EachTestimonial = ({testimonial, className}: {testimonial: testimonialType, className?: string}) => {
  return (
    <div className={`p-5 flex flex-col gap-4 rounded-xl shadow-md w-full max-w-[300px] min-w-[250px] min-h-[200px] ${className === "bg-gray-100" ? "bg-white" : "bg-gray-100"}`}>
      <Quote size={30} className="text-Black"/>

      <p className="h-full text-Grey2 text-[14px]">{testimonial.testimony}</p>
      
      <div className="flex gap-2 items-center">
        <div style={{background: `url(${testimonial.image.url})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className="size-10 rounded-full" />

        <div className="flex flex-col gap-1 justify-center leading-none">
          <p className="text-[14px] font-medium text-black"> {testimonial.name} </p>
          <p className="text-[12px] text-Grey2">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonies = ({portfolio, className}: {portfolio: PortfolioData, className?: string}) => {
  return (
    <section id="testimonials" className={`flex flex-col gap-10 py-16 px-[4%] items-center ${className}`}>
      <div className="flex flex-col gap-2 items-center text-center">
        <button className="outline-none text-[12px] px-7 py-1 rounded-full bg-gray-300 w-fit">
          Testimonies
        </button>

        <p>Nice things people have said about me:</p>
      </div>

      <div className="w-full py-4 flex gap-12 overflow-x-auto scrollbar">
        {portfolio.testimonials?.map((testimonial, index) => (
          <EachTestimonial key={index} testimonial={testimonial} className={className} />
        ))}
      </div>
    </section>
  )
}

export default Testimonies
