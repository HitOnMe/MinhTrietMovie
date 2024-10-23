import React, { Component } from 'react';
import configData from '../services/config';

const images = [
  'https://statics.vincom.com.vn/vincom-ho/image2-1671509424.jpg',
  'https://i0.wp.com/vietnaminsider.vn/wp-content/uploads/2022/11/rap-chieu-phim-cgv-tai-aeon-mall-ha-dong-ngay-2032021-1622629507937537947515.jpg?fit=1280%2C960&ssl=1',
  'https://firmy.cinestar.cz/images/kina_ftd/HK_03_edited.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/f_FCK2AwxhoK7nrYohxjqg/o.jpg',
  'https://danangreviews.vn/wp-content/uploads/2021/04/lotte-cinema.jpg',
  'https://reviewphimaz.com/wp-content/uploads/2018/08/rap-chieu-phim-mega-gs-cao-thang-tphcm.jpg'
];

class FilmTheatre extends Component {

  state = {
    theatres: null,
    selectedTheatreClusters: null, // Chỉ lưu trữ một cụm rạp đang mở
  };

  fetchTheatre =  async(url) =>{
    try {
      const response = await configData('GET', url)
    console.log(response.data)
    return response?.data.content
    }
  catch(error) {console.error(error)}}

  fetchMovie = async(theaterCode, maCumRap) => {
    const {getData} = this.props
    const response = await this.fetchTheatre(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${theaterCode}&maNhom=GP01`);
    console.log(response[0]['lstCumRap'].filter(data => data.maCumRap === maCumRap))
    return getData(response[0]['lstCumRap'].filter(data => data.maCumRap === maCumRap))
  }

  componentDidMount() {
    const baseURL = ['/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01'];
    this.fetchTheatre(baseURL).then((theatres) => {
      this.setState({ theatres });
    });
  }

  handleSelectTheatre = async (theaterCode) => {
    const { selectedTheatreClusters } = this.state;

    // Nếu rạp đã được chọn thì sẽ tắt
    if (selectedTheatreClusters === theaterCode) {
      this.setState({ selectedTheatreClusters: null });
    } else {
      // Nếu có rạp khác đang mở thì sẽ đóng cụm rạp đó
      const url = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterCode}`
      const clusters= await this.fetchTheatre(url);
      this.setState({ selectedTheatreClusters: { code: theaterCode, clusters } });
    }
   
  };

  render() {
    const { theatres, selectedTheatreClusters } = this.state;
   

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 col-span-4">
        <ul className="space-y-4">
          {theatres ? (
            theatres.map((theater, index) => (
              <li
                key={index}
                onClick={() => this.handleSelectTheatre(theater.maHeThongRap)}
                className="bg-gray-100 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={theater.logo}
                    alt={`${theater.tenHeThongRap} logo`}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <strong className="text-lg text-blue-600">{theater.tenHeThongRap}</strong>
                    <p className="text-gray-700">{theater.diaChi}</p>
                  </div>
                </div>

                {/* Render cụm rạp dưới mỗi rạp khi được chọn */}
                <div
                  className={`mt-4 transform transition-transform duration-500 ${
                    selectedTheatreClusters?.code === theater.maHeThongRap
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-5 opacity-0'
                  }`}
                >
                  {selectedTheatreClusters?.code === theater.maHeThongRap && (
                    <>
                      <h3 className="text-md font-semibold mb-2">Cụm rạp:</h3>
                      <ul className="space-y-2">
                        {selectedTheatreClusters.clusters.map((cluster, idx) => (
                          <li key={idx} onClick = {() => this.fetchMovie(theater.maHeThongRap, cluster.maCumRap)} className="flex items-center space-x-4 gap-3 cursor-pointer bg-gray-200 rounded-lg p-2 hover:bg-gray-300 transition-colors">
                            <img
                              src={images[idx % images.length]}
                              alt={`${cluster.tenCumRap} logo`}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <strong className="text-lg text-blue-600">{cluster.tenCumRap}</strong>
                              <p className="text-gray-700">{cluster.diaChi}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">Loading theaters...</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FilmTheatre;
