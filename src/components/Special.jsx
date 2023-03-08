const user = {
  name: "Rejoice Adeboye",
  imageUrl: "https://imgur.com/gallery/Mo4OIF8",
  imageSize: 90,
};

const Special = () => {
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
      <div>
        <h1>this is the features section</h1>
        <button
          className="p-3 px-6 pt-2 text white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          type="button"
          onClick={onButtonClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

const onButtonClick = () => {
  return (
    <div>
      <img src={Logo} alt="This is Rejoice Adeboye" />
    </div>
  );
};

export default Special;
