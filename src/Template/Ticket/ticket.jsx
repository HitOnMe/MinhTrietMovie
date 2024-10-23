/* import React, { useState } from 'react';
import SeatBooking from './SeatBooking';

const TicketBookingLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalPrice = selectedSeats.length * 100000; // Giả định giá vé là 100000 VNĐ

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <SeatBooking selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        </div>

        <div className="col-span-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Thông Tin Đặt Vé</h2>
            <div className="mb-2">
              <strong>Ngày Chiếu:</strong> <span>12/10/2024</span>
            </div>
            <div className="mb-2">
              <strong>Cụm Rạp:</strong> <span>Cụm Rạp B</span>
            </div>
            <div className="mb-2">
              <strong>Ghế Đã Chọn:</strong> 
              <span>
                {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Chưa chọn ghế'}
              </span>
            </div>
            <div className="mb-4">
              <strong>Tổng Tiền:</strong> <span>{totalPrice.toLocaleString()} VNĐ</span>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
              Mua Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBookingLayout; */
import React, { useState } from 'react';
import SeatBooking from './SeatBooking';

const TicketBookingLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalPrice = selectedSeats.length * 100000; // Giả định giá vé là 100000 VNĐ

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <SeatBooking selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        </div>

        <div className="col-span-4">
           <h3 className = 'textgreen-400 text-center'></h3>
           <h3 className='text-xl'>Lật mặt 48h</h3>
           <p>Địa điểm: BKD Star - Vincom 3/2</p>
           <p>Ngày chiếu: 25/04/2021 - 12:05 Rạp 5</p>
           <hr/>
           <div className = 'gred grid-cols-2'>
           <span className = 'text-red-400'>Ghế</span>
           <div className ='text-right'> 0Đ </div>
           </div>
           
        </div>
      </div>
    </div>
  );
};

export default TicketBookingLayout;