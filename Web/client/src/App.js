import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
    <header className="mt-0 pt-0">
        <div className="bg-cover clearfix pt-3">
            <h2 className="logo text-center">RACING CAR TRACKER</h2>
            <nav className="nav nav-fill mx-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://facebook.com/F1Racing" target="_blank"><i
                            className="fab fa-facebook-f"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://twitter.com/F1Racing" target="_blank"><i
                            className="fab fa-twitter"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://instagram.com/F1Racing" target="_blank"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://google/F1Racing" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                </li>

            </nav>


            <input type="text" id="nav-search" className="nav-search mx-auto" name="" />
            <div className="ml-0 mr-0 pb-1">
                <nav className="navbar navbar-expand-md">

                    <button className="navbar-toggler ml-auto" data-target="#my-nav" data-toggle="collapse"
                        aria-controls="my-nav" aria-expanded="false" onclick="myFunction(this)"
                        aria-label="Toggle navigation">
                        <span className="bar1"></span> <span className="bar2"></span> <span className="bar3"></span>
                    </button>
                    <div id="my-nav" className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="article.html">RACING EVENTS</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="#">SPARE PARTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TRACKING SOFTWEARS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MODERN TECHNOLOGIES</a>
                            </li>
                            
                            <li className="nav-item">
                                <form action="" method="POST">
                                    <div className="input-group mt-0 mx-auto" style={{width:1}}>

                                        <div className="">
                                            <img src="assets/images/search-icon.png" id="toggle-search"
                                                className="ml-2 toggle-search" alt="search icon"/>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div className="row ml-0 mr-0">
            <div className="col-md-6 pr-0">
                <div className="card">
                    <img className="card-img" src="assets/images/left-img.jpg" alt=""/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center flex-column">
                        <p>Track a Racing Car</p>
                        <hr />
                        <h2>Click here to track</h2>
						<a href="http://192.168.43.23/" className="btn">TRACK</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pl-0">
                <div className="card">
                    <img className="card-img" src="assets/images/right-img.jpg" alt=""/>
                    <div className="card-img-overlay d-flex align-items-center justify-content-center flex-column">
                        <p>Track Multilpe Cars</p>
                        <hr />
                        <h2>Click here to track</h2>
                        <a href="http://192.168.43.23/" className="btn">TRACK</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 pr-0 first">
                <div className="card">
                    <img className="card-img" src="assets/images/architecture.png" alt=""/>
                    <div className="card-img-overlay">
                        <h5>RACING EVENTS</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pl-0 pr-0">
                <div className="card">
                    <img className="card-img" src="assets/images/interior.png" alt=""/>
                    <div className="card-img-overlay">
                        <h5>SPARE PARTS</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pl-0 pr-0">
                <div className="card">
                    <img className="card-img" src="assets/images/food.png" alt=""/>
                    <div className="card-img-overlay">
                        <h5>TRACKING SOFTWEARS</h5>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pl-0 last">
                <div className="card">
                    <img className="card-img" src="assets/images/travel.png" alt=""/>
                    <div className="card-img-overlay">
                        <h5>MODERN TECHNOLOGIES</h5>
                    </div>
                </div>
            </div>
        </div>

    </header>

   



          







    <div className="container-fluid fh5co-recent-news mt-5 pb-5">
        <h2 className="text-uppercase text-center">Recent Data</h2>
        <hr className="mx-auto" />
        
    </div>
	
	<div className="container-fluid fh5co-recent-news mt-5 pb-5">
        <h2 className="text-uppercase text-center">ABOUT US</h2>
        <hr className="mx-auto" />

        <div className="play-list mt-0 pt-0">
				<p className="text-center ">F1 racing event company is a worldwide well-known company.</p>
				<p className="text-center ">We are the most famous company that provides racing services for worldwide racing cars</p>
				<p className="text-center ">Racing car parts, racing car controlling modules, tracking softwears are the main services that we are providing</p>
                <p className="text-center ">Adress: No07/4, Union Place, Colombo, Sri Lanka</p>
                        
	
                    </div>
                </div>
    <div className="container-fluid jumbotron-fluid stay mt-5 pt-5 pb-5">
        <h2 className="text-center">Stay Updated</h2>
        <p className="text-center mt-2">Sign up for further information about our racing events.</p>
        <div className="input-group mt-4 mx-auto" style={{width:600}}>
            <input type="email" className="form-control" placeholder="YOUR EMAIL ADDRESS"/>
            <div className="">
                <button className="btn btn-success ml-2" type="submit">SIGN UP</button>
            </div>
        </div>
    </div>

    <footer className="container-fluid pt-5">
        <div className="container">
            <h2 className="logo text-center">RACING CAR TRACKER</h2>
            <nav className="nav nav-fill mx-auto mt-5">
                <li className="nav-item">
                    <a className="nav-link" href="https://facebook.com/F1Racing" target="_blank"><i
                            className="fab fa-facebook-f"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://twitter.com/F1Racing" target="_blank"><i
                            className="fab fa-twitter"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://instagram.com/F1Racing" target="_blank"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://accounts.google.com/F1Racing" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                </li>
            </nav>
        </div>
        <div className="copyright mt-4">
            <p className="text-center">&copy; 2023 <a href="#" className="text-white">RacinCarTracker</a>. All Rights Reserved. Design
                by <a href="https://F1Racing.co/F1Racing" target="_blank" className="text-white">F1Racing.co</a>.</p>
        </div>
    </footer>

    


</div>
  );
}

export default App;
