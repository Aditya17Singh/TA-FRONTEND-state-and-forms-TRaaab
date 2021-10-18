function Menu(props) {
    console.log(props)
    return (
        <>
      <h1>
        {props.data.map((e) => {
        console.log(e.title);
          return (
            <>
              <h2>{e.title}</h2>
            </>
          );
        })}
      </h1>
    </>
  );
}

export default Menu;
