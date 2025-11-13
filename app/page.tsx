import { redirect } from "next/navigation";

const homePage = () => {
  return redirect("/dashboard");
}

export default homePage;
