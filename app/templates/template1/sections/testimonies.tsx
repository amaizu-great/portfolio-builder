import Image from "next/image";
import { PortfolioData, testimonialType } from "@/types/portfolio";


const EachTestimonial = ({testimonial}: {testimonial: testimonialType}) => {
  return (
    <div className="px-8 py-12 flex flex-col gap-4 min-w-[320px] max-w-[320px] text-center rounded justify-center items-center shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-100 max-md:min-w-[280px]">
      <Image src={testimonial.image.url} alt={testimonial.name} width={70} height={100} className="w-[70px] rounded" />
      <p>{testimonial.testimony}</p>
      
      <div>
        <p className="text-[16px] font-medium text-[#030712] dark:text-white"> {testimonial.name} </p>
        <p className="text-[12px] ">{testimonial.company}</p>
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

      <div className="w-full flex gap-12 overflow-x-auto scrollbar">
        {portfolio.testimonials?.map((testimonial, index) => (
          <EachTestimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonies
