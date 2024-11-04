import NavBar from '../navigation/components/NavBar/NavBar.tsx';

function AppHub() {
  return (
    <div className="grid h-2/3 w-full grid-cols-[0.08fr,0.65fr,0.25fr] gap-x-8 bg-black px-10 pb-8 pt-5">
      {/* Left Component */}
      <NavBar />

      {/* Middle Column with Two Components Stacked */}
      <div className="flex flex-col gap-y-8">
        <div className="bg-opacity-27 h-full rounded-[40px] bg-white"></div>
        {/* Top Component */}
        <div className="bg-opacity-27 h-full rounded-[40px] bg-white"></div>
        {/* Bottom Component */}
      </div>

      {/* Right Component */}
      <div className="bg-opacity-27 rounded-[40px] bg-white"></div>
    </div>
  );
}

export default AppHub;
