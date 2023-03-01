const user = {
  name: "Rejoice Adeboye",
  imageUrl: "https://imgur.com/gallery/Mo4OIF8",
  imageSize: 90,
};

const Welcome = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"This is " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      ></img>
    </>
  );
};

export default Welcome;
