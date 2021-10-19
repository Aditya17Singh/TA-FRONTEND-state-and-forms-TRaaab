function Menu(props) {
  return (
    <>
      <h1 className="container flex wrap">
        {props.info.map((e) => {
          return (
            <>
              <div className="flex-45 card">
                <div>
                  <img className="image-width" src={`${e.img}`} alt={e.title} />
                </div>
                <div>
                  <div className="flex">
                    <div className="title">{e.title.toUpperCase()}</div>
                    <span>${e.price}</span>
                  </div>
                  <hr />
                  <span>{e.desc.charAt().toUpperCase() + e.desc.slice(1)}</span>
                </div>
              </div>
            </>
          );
        })}
      </h1>
    </>
  );
}

export default Menu;
