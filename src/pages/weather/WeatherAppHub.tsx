import NavBar from '../../navigation/components/NavBar/NavBar.tsx';
import Activities from '../../activities/components/Activities/Activities.tsx';

function WeatherAppHub() {
  return (
    <div className="grid h-2/3 w-full grid-cols-[0.08fr,0.65fr,0.25fr] gap-x-8 px-10 pb-8 pt-5">
      {/* Left Component */}
      <NavBar />

      {/* Middle Column with Two Components Stacked */}
      <div className="flex flex-col gap-y-8">
        <Activities />
        {/* Top Component */}
        <div className="h-full rounded-[40px] bg-white bg-opacity-[27%]"></div>
        {/* Bottom Component */}
      </div>

      {/* Right Component */}
      <div className="rounded-[40px] bg-white bg-opacity-[27%]"></div>
    </div>
  );
}

export default WeatherAppHub;
