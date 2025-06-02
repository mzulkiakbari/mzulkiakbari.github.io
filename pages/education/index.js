import Metadata from "@/components/utilities/metadata";

const EducationPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Education"
        description="This is my eduction"
        image="/metadata/home.png"
        url="pendidikan"
      />

      <section
        id="pendidikan"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Education
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2015 - 2018 | Grade 91
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      SMK Negeri 2 Lhokseumawe
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      MULTIMEDIA
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Computer (Binary, Hexadecimal, Octal Decimal, RAM,
                        Hardisk, Microsoft Office, Windows Installation)
                      </p>
                    </div>

<div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
Multimedia (Adobe Photoshop, Adobe Premier Pro, Adobe Dreamveawer, Flash, Animation, Blender 3D, Corel Draw)
                      </p>
                    </div>

<div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
Web (HTML, JS, CSS)
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Networking (LAN Cable with Crossover and Straight
                        Through, Subnetting, Routing, Switching, Wireless)
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
