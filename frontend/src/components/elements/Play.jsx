function Play() {
  return (
    <>
    <div className="mx-auto">
      <video className="m-auto d-block" controls width="70%" autoPlay={true}>
        <source src="videos/sample.mp4" type="video/mp4" />
        {/* <source src="videos/sample.mp4" type="video/mp4" /> */}
        Sorry, your browser doesn't support videos.
      </video>
    </div>
    </>
  );
}

export default Play;
