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

export let adminService = {
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
};
