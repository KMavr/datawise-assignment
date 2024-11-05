import { Link } from 'react-router-dom';
import { ROUTES } from '../../model/routesConfig.ts';
import UserImage from '../components/UserImage/UserImage.tsx';

function NavBar() {
  return (
    <div className="hidden flex-[0.08] flex-col justify-between rounded-[40px] bg-white bg-opacity-[27%] md:flex">
      <UserImage />
      <div className="flex flex-[0.7] flex-col items-center justify-evenly text-white">
        {ROUTES.map(({ route, routeName, asset }) => {
          return (
            <Link key={routeName} to={route} className="flex flex-col items-center">
              <img src={asset} alt={routeName} />
              <span>{routeName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
