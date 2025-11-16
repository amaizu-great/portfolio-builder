
import Template1 from "./templates/template-1/template-1";
import useTemplatesState from "@/zustand/non-persist/templateState";

const Preview = () => {
  const { template } = useTemplatesState()

  const renderTemplate = () => {
    switch (template) {
    //   case "template2":
    //     return <Template2 data={portfolio} />;
    //   case "template3":
    //     return <Template3 data={portfolio} />;
      case "template-1":
      default:
        return <Template1 />;
    }
  };


  return (
    <div className="hidden h-full w-full overflow-y-scroll scrollbar lg:block">
      {renderTemplate()}
    </div> 
  )
}

export default Preview
