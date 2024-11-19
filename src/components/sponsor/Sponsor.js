const Sponsor = () => {
  return (
    <div className="bg-[#00000080] relative py-10 md:px-0 sm:px-8 px-4  w-[100%] min-h-[60vh]">
      <h1 className="text-center mb-8 font-[Varela] text-[#8F8EE9] font-bold text-5xl">
        Why Sponsor Us ?
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div
          className="md:w-[500px] w-[100%] py-[65px] px-[34px] rounded-[16px] border-b-[4px] border-[#fff]"
          style={{
            background: "rgba(128, 128, 128, 0.3)", // Gray with 30% opacity
            backgroundBlendMode: "luminosity",
            border:
              "1px solid linear-gradient(156.52deg, #FFFFFF66 2.12%, #FFFFFF00 39%, #FFFFFF00 54.33%, #FFFFFF1A 93.02%)",
          }}
        >
          <p className="text-slate-200 text-lg">
            Our sponsors will enjoy a distinctive, and marketable appearance
            along with a significant media presence. You will be marketed in a
            variety of ways, such as on posters, hoardings, websites, etc. As
            our hackathon will be conducted offline, students will be exposed to
            your quality products, which will lead to your growth.
          </p>
          <div className="flex justify-between items-center md:px-[16px]">
            <a
              href="https://drive.google.com/file/d/1bLDhqCPdvAV_t0MFFnE4AmNfCG2VDQG7/view?usp=sharing"
              target="_blank"
            >
              <button className="fold-btn mt-[40px] font-[Varela]">
                <b>View Brochure</b>
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1-uY5lQ_0he__Arlrs3vHrBlIQTl7MiqD/view"
              target="_blank"
            >
              <button className="fold-btn mt-[40px] ml-8 font-[Varela]">
                <b>Code of Conduct</b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
