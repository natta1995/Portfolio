import defaultVideo from "../Video/default.mp4";

const DemosPage = () => {
    return (
        <div>
        <p className="mt-3 text-zinc-600">
        Här finner du längre demos av några av min projekt. Där jag går igenom och berättar.
      </p>
          <p className="mt-3 text-zinc-600">
        Vill du istället se kortare demos där flödet visas upp (under 60 sekunder) - se projektsidan.
      </p>

              <div className="lg:col-span-2">
                <div className="aspect-video w-full max-w-[800px] overflow-hidden rounded-lg border border-zinc-50 bg-black shadow-lg">
                  <video
                    className="h-full w-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={defaultVideo} type="video/mp4" />
                    Din webbläsare stödjer inte video.
                  </video>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="aspect-video w-full max-w-[800px] overflow-hidden rounded-lg border border-zinc-50 bg-black shadow-lg">
                  <video
                    className="h-full w-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={defaultVideo} type="video/mp4" />
                    Din webbläsare stödjer inte video.
                  </video>
                </div>
              </div>
      </div>
    )
}

export default DemosPage;