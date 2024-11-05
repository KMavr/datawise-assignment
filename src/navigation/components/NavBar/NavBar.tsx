import { Link } from 'react-router-dom';
import { ROUTES } from '../../model/routesConfig.ts';
import userImage from './__mocks__/userImage.svg';

function NavBar() {
  return (
    <div className="flex flex-[0.08] flex-col justify-between rounded-[40px] bg-white bg-opacity-[27%]">
      <div className="flex flex-[0.2] items-center justify-evenly">
        <img src={userImage} alt="user image" width="50rem" height="50rem" />
      </div>
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
