import React from 'react';

const WakaTimeCalender = () => {
  return (
    <section className="WakaTimeCalender">
    <div className="w-fit h-fit  bg-sky-200 rounded-lg p-4 animate-fade-in bottom-24">
      <h2 className="text-lg font-bold relative my-6  mx-8-auto">WakaTime Stats</h2>
      <div className="flex-items-center mx-auto mt-12 mb-18 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl">
        <figure>
          <embed className="ml-4 bg-transparent scale-130 " scale="1.5" src="https://wakatime.com/share/@datfoosteve/6043ff9f-16af-4f30-832b-54e58beabde1.svg" />
        </figure>
      </div>
    </div>
    </section>
  );
};

export default WakaTimeCalender;
