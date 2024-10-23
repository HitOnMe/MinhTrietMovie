import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendData: null,  // Khởi tạo với null
      loading: true    // Trạng thái loading
    };
  }

  renderMovie = () => {
    const { sendData } = this.state;
    if (!sendData || !sendData[0] || !sendData[0].movie || !sendData[0].movie.danhSachPhim) {
      return <p>No movie data available.</p>;
    }
    console.log(sendData[0])
    return sendData[0].danhSachPhim.map((film, index) => (
      <div className="card" key={index}>
        <img src={film.hinhAnh} alt={film.tenPhim}></img>
        <div className="descriptions">
          <h1>{film.tenPhim}</h1>
          <p>{film.moTa}</p>
          <button>
            <i className="fab fa-youtube" />
            Play trailer on YouTube
          </button>
        </div>
      </div>
    ));
  };

  render() {
    const { loading } = this.state;


    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className='col-span-8'>
        <div className="wrapper">
          {this.renderMovie()}
        </div>
        <div className="youtubeBtn">
          <a target="_blank" href="https://www.youtube.com/AhmadEmran?sub_confirmation=1">
            <span>Watch on YouTube</span>
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    );
  }
}
