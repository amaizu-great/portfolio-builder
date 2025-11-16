import { Quote } from "lucide-react";
import { testimonialType } from "@/types/portfolio";
import AddPortfolioState from "@/zustand/non-persist/addPortfolio";


const EachTestimonial = ({testimonial, className}: {testimonial: testimonialType, className?: string}) => {
  return (
    <div className={`p-5 flex flex-col gap-4 rounded-xl shadow-md w-full max-w-[250px] min-w-[200px] min-h-[150px] ${className === "bg-gray-100" ? "bg-white" : "bg-gray-100"}`}>
      <Quote size={30} className="text-Black"/>

      <p className="h-full text-Grey2 text-[12px]">{testimonial.testimony}</p>
      
      <div className="flex gap-2 items-center">
        {testimonial?.image?.url && <div style={{background: `url(${testimonial.image.url})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className="size-8 rounded-full" />}

        <div className="flex flex-col gap-1 justify-center leading-none">
          <p className="text-[12px] font-medium text-black"> {testimonial.name} </p>
          <p className="text-[10px] text-Grey2">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonies = ({className}: {className?: string}) => {
  const { testimonials } = AddPortfolioState()

  return (
    <section id="testimonials" className={`flex flex-col gap-4 py-10 px-4 items-center ${className}`}>
      <div className="flex flex-col gap-2 items-center text-center">
        <button className="outline-none text-[10px] px-4 py-1 rounded-full bg-gray-300 w-fit">
          Testimonies
        </button>

        <p className="text-[12px]">Nice things people have said about me:</p>
      </div>

      <div className="w-full py-2 flex gap-4 overflow-x-auto scrollbar">
        {testimonials?.map((testimonial, index) => (
          <EachTestimonial key={index} testimonial={testimonial} className={className} />
        ))}
      </div>
    </section>
  )
}

export default Testimonies
