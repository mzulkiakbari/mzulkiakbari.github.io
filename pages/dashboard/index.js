import * as React from "react";
import Metadata from "@/components/utilities/metadata";
import dashboards from "@/data/dashboards.json";
import LineChart from "@/components/utilities/chart/LineChart";


const DashboardPage = () => {
  const featureRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(null);

  const scrollPositionRef = React.useRef(0);
  
  const readMoreClick = (id) => {
    setExpanded(expanded === id ? null : id);

    if(!expanded) {
      scrollPositionRef.current = window.scrollY;
    } else {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <Metadata
        title="Portofolio - Dashboard"
        description="This is my dashboard"
        image="/metadata/home.png"
        url="dashboard"
      />

      <section
        id="dashboard"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                My Dashboard
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="">
              <ol className="border-l border-dark dark:border-white flex flex-col gap-2">
                {/* Items */}
                { dashboards.map((dashboard, index) => 
                  <div key={index}>
                    { dashboard.chart.type === "line" && <LineChart data={dashboard.chart.data} title={dashboard.title} notes={ dashboard.notes }/> }
                  </div>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
