export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index">
            <img src="logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top">
              Alan Game
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Game">Game</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Social">Social</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="icon/loading.gif"
                src-data="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png" className="
                        d-block w-100" alt="Every Second +1 Ki In DBZ">
            </div>
            <div className="carousel-item">
              <img src="icon/loading.gif"
                src-data="https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/420/420/Image/Png"
                className="d-block w-100" alt="Clicker Fighting Simulator">
            </div>
            <div className="carousel-item">
              <img src="icon/loading.gif"
                src-data="https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/420/420/Image/Png"
                className="d-block w-100" alt="Naruto Every Second +1 Chakra">
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>

        <div className="game_frame">
          <h2 className="game_frame_title">Our games</h2>
          <a href="Game" className="btn btn-primary">More Game</a>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="icon/loading.gif"
                  src-data="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png"
                  className="card-img-top" alt="Every Second +1 Ki In DBZ">
                  <div className="card-body">
                    <h5 className="card-title">Every Second +1 Ki In DBZ</h5>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
