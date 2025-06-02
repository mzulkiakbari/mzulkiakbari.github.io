import * as React from "react";
import Metadata from "@/components/utilities/metadata";
import certifications from "@/data/certifications.json";


const EducationPage = () => {
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
        title="Portofolio - Certifications"
        description="This is my certifications"
        image="/metadata/home.png"
        url="certifications"
      />

      <section
        id="certifications"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Certifications
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white flex flex-col gap-2">
                {/* Items */}
                { certifications.map((project, index) => 
                  <li key={index}>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                      <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                        { project.year_created } - { project.progress }
                      </p>
                    </div>

                    <div className="mb-6 ml-4 mt-2">
                      <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                        { project.title }
                      </h4>

                      <div className="mb-3 text-neutral-500 dark:text-neutral-300 flex flex-col gap-2">
                        <div className="flex flex-row flex-wrap text-center gap-2">
                          { project.technologies.map((tech, techIndex) => 
                            <span key={techIndex} className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                              { tech }
                            </span>
                          )}
                        </div>

                        <div className="flex flex-row text-center gap-2 self-start">
                          <span className="text-sm">{ project.notes }</span>
                        </div>

                        <div className="flex flex-row gap-3">
                          { project.live_url && <a className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" href={ project.live_url } target="_blank">VIEW</a> }
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div ref={featureRef} className={`flex flex-col gap-2 ${expanded === index ? '' : 'max-h-20'} overflow-hidden relative transition-max-height duration-300 ease-in-out`}>
                          { project.description && project.description.type === "list" && project.description.items && project.description.items.map((item, itemIndex) =>
                            <div key={itemIndex}>
                              <div className="flex-start flex items-center">
                                <p className="text-base font-semibold text-neutral-500 dark:text-neutral-300">
                                  {itemIndex+1}. { item.title }
                                </p>
                              </div>

                              <div className="ml-3">
                                { item.type === "list" && item.items && item.items.map((subItem, subItemIndex) => 
                                  <div key={subItemIndex} className="flex-start flex items-center">
                                    { item.symbol === "dot" &&
                                    <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div> }
                                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                      { subItem }
                                    </p>
                                  </div>
                                )}

                                { item.type === "text" && item.text && <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                    { item.text }
                                  </p>
                                }
                              </div>
                            </div>
                          )}
                        </div>

                        { project.description &&
                          <div className={`${expanded === index ? '' : '-mt-6'} w-full flex flex-col items-center`}>
                            { expanded !== index &&
                              <div className="h-10 w-full bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none backdrop-blur-sm"></div>
                            }

                            <button className="px-4 py-2 rounded-full absolute" onClick={() => readMoreClick(index)}>
                              <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                                <>{ expanded === index ? 'Show Less' : 'Read More' }</>
                              </p>
                            </button>
                          </div>
                        }
                      </div>
                    </div>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
