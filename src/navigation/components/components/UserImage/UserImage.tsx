import userImage from './__mocks__/userImage.svg';

function UserImage() {
  return (
    <div className="flex flex-[0.2] items-center justify-evenly">
      <img src={userImage} alt="user image" width="50rem" height="50rem" />
    </div>
  );
}

export default UserImage;
