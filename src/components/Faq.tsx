import FAQBox from "./FaqBox";
import { faqData } from "@/data/faqData";

const Faq = () => {
  return (
    <section>
      <div className="bg-[#fcbb10] font-geist p-12 flex flex-col items-center justify-center">
        <h1 className="font-bold text-7xl mb-10"> FAQ </h1>
        <FAQBox faqs={faqData} />
      </div>
    </section>
  );
};

export default Faq;
