import React, {useState, useEffect} from 'react'

export default function SelectTheatre(props) {
    const url = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01/${props}`
    const {movie, selectMovie} = useState(null);
    const handleMovie = () => {
    console.log(props)
    }
  return (
    <div>{props}</div>
  )
}
