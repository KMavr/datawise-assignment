import { Link } from 'react-router-dom';
import heart from '../../assets/heart.svg';
import activity1 from './__mocks__/activity-1.svg';
import activity2 from './__mocks__/activity-2.svg';
import activity3 from './__mocks__/activity-3.svg';
import activity4 from './__mocks__/activity-4.svg';
import { distanceFormatter } from '../../utils/activitiesUtils.ts';

function Activities() {
  // this is hardcoded data, but normally should be fetched from server
  const activities = [
    {
      activity: 'activity-1',
      distance: 2000,
      image: activity1,
    },
    {
      activity: 'activity-2',
      distance: 1500,
      image: activity2,
    },
    {
      activity: 'activity-3',
      distance: 3000,
      image: activity3,
    },
    {
      activity: 'activity-4',
      distance: 500,
      image: activity4,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-around rounded-[40px] bg-white bg-opacity-[27%] px-8">
      <div className="flex flex-row">
        <img src={heart} alt="activities heart icon" />
        <span className="ml-1 text-2xl font-medium text-white">Activities in your area</span>
      </div>
      <div className="flex flex-row justify-between">
        {activities.map(({ activity, distance, image }) => (
          <Link to={`/${activity}`} className="mx-5 flex flex-1 flex-col">
            <img src={image} alt={activity} />
            <span>{distanceFormatter(distance)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Activities;
