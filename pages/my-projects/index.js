import * as React from "react";
import Metadata from "@/components/utilities/metadata";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import webProjects from "@/data/web_projects.json";
import graphicDesigner from "@/data/graphic_designer_projects.json";
import videoEditing from "@/data/video_editing_projects.json";
import myStartup from "@/data/my_startup_projects.json";

const MyProjectsPage = () => {
  const [expanded, setExpanded] = React.useState(null);
  const [openPreview, setOpenPreview] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState([]);
  const featureRef = React.useRef(null);
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

  const setImagePreviewList = (images) => {
    const slides = images.map((image) => ({
      src: image
    }));
    setImagePreview(slides);
    setOpenPreview(true);
  }

  return (
    <>
      <Metadata
        title="Portofolio - My Projects"
        description="One Man Multi Talended Fullstack Developer - Graphic Designer - UI/UX Designer - Web Developer - Mobile Developer - Video Editor - SEO Basic - etc"
        image="/metadata/home.png"
        url="my-projects"
      />

      <section
        id="my-projects"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark flex flex-col gap-4"
      >
        <Lightbox
            open={openPreview}
            close={() => setOpenPreview(false)}
            slides={imagePreview}
            plugins={[Thumbnails]}
          />

        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Fullstack Developer Projects
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white flex flex-col gap-2">
                {/* Items */}
                { webProjects.map((project, index) => 
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
                          { project.preview_images && project.preview_images.length > 0 && <button className="inline-flex items-center rounded-full border px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" onClick={() => setImagePreviewList(project.preview_images)}>PREVIEW</button> }

                          { project.live_url && <a className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" href={ project.live_url } target="_blank">LIVE DEMO</a> }
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div ref={featureRef} className={`flex flex-col gap-2 ${expanded === index ? '' : 'max-h-20'} overflow-hidden relative transition-max-height duration-300 ease-in-out`}>
                          { project.description.type === "list" && project.description.items && project.description.items.map((item, itemIndex) =>
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
                              </div>
                            </div>
                          )}
                        </div>

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
                      </div>
                    </div>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center flex flex-col items-center gap-2">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Graphic Designer Projects
              </h4>

              <div className="flex flex-row flex-wrap text-center gap-2">
                { graphicDesigner.technologies.map((tech, techIndex) => 
                  <span key={techIndex} className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                    { tech }
                  </span>
                )}
              </div>

              { graphicDesigner.notes &&
              <div className="flex flex-row text-center gap-2 self-start">
                <span className="text-sm">{ graphicDesigner.notes }</span>
              </div> }

              <div className="flex flex-row gap-3">
                { graphicDesigner.live_url && <a className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" href={ graphicDesigner.live_url } target="_blank">LINK</a> }
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center flex flex-col items-center gap-2">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Video Editing Projects
              </h4>

              <div className="flex flex-row flex-wrap text-center gap-2">
                { videoEditing.technologies.map((tech, techIndex) => 
                  <span key={techIndex} className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                    { tech }
                  </span>
                )}
              </div>

              { videoEditing.notes &&
              <div className="flex flex-row text-center gap-2 self-start">
                <span className="text-sm">{ videoEditing.notes }</span>
              </div> }

              <div className="flex flex-row gap-3">
                { videoEditing.live_url && <a className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" href={ videoEditing.live_url } target="_blank">LINK</a> }
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                My Startup Projects
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white flex flex-col gap-2">
                {/* Items */}
                { myStartup.map((project, index) => 
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
                          { project.preview_images && project.preview_images.length > 0 && <button className="inline-flex items-center rounded-full border px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" onClick={() => setImagePreviewList(project.preview_images)}>PREVIEW</button> }

                          { project.live_url && <a className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-lg font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none" href={ project.live_url } target="_blank">LIVE DEMO</a> }
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div ref={featureRef} className={`flex flex-col gap-2 ${expanded === index ? '' : 'max-h-20'} overflow-hidden relative transition-max-height duration-300 ease-in-out`}>
                          { project.description.type === "list" && project.description.items && project.description.items.map((item, itemIndex) =>
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

export default MyProjectsPage;
