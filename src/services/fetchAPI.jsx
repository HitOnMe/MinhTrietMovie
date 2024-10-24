import { useState, useEffect } from "react";
import configData, { http } from "./config";

const UseFetchTheatre = (url) => {
  const [theatre, setTheatre] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await configData("GET", url);
      setTheatre(response.data);
    };
    getData();
  }, [url]);
  return theatre;
};
export default UseFetchTheatre;

// quản lý api - admin
export let adminService = {
  // USER
  layDanhSachNguoiDung: () => {
    return http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
  },
  xoaNguoiDung: (taiKhoan) => {
    return http.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  themNguoiDung: (dataForm) => {
    return http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, dataForm);
  },

  // MOVIE
  layDanhSachPhim: () => {
    return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
};
