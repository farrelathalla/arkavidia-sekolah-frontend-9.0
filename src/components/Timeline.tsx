import FactBox from "./Fact";
import { facts } from "@/data/factData";
import TimelineBox from "./TimelineBox";

const Timeline = () => {
  return (
    <section>
      <div className="p-12 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl">TIMELINE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center justify-center gap-10">
          <div className="w-full">
            <FactBox
              facts={facts}
              scrollInterval={3000}
              className="border rounded-lg"
            />
          </div>
          <div className="w-full">
            <TimelineBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
