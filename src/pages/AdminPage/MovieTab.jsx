import React, { useState, useEffect } from "react";
import { adminService } from "../../services/fetchAPI";
import { Button, Table, Modal, message } from "antd";

export default function MovieTab() {
  const [listMovie, setListMovie] = useState();

  let fetchListMovie = () => {
    adminService
      .layDanhSachPhim()
      .then((res) => {
        setListMovie(res.data.content);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchListMovie();
  }, []);

  // hàm thiết lập lại định dạng url embed cho iframe
  let getSrcYoutube = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const ID = match && match[2].length === 11 ? match[2] : null;
    return "https://www.youtube.com/embed/" + ID;
  };

  // hàm xóa phim
  let handleDeleteMovie = async (maPhim) => {
    try {
      let result = await adminService.xoaPhim(maPhim);
      message.success("Xóa phim thành công");
      fetchListMovie();
    } catch (error) {
      message.error("Xóa phim thất bại");
    }
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (_, dataObject) => {
        return (
          <div className="max-w-36">
            <h2>{dataObject.tenPhim}</h2>
          </div>
        );
      },
    },
    {
      title: "Poster",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (_, dataObject) => {
        return <img className="max-w-28" src={dataObject.hinhAnh} alt="" />;
      },
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      key: "trailer",
      render: (_, dataObject) => {
        let embed = getSrcYoutube(dataObject.trailer);
        return (
          <iframe
            src={embed}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
          ></iframe>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (_, dataObject) => {
        return (
          <p className="max-w-64 max-h-48 overflow-y-scroll">
            {dataObject.moTa}
          </p>
        );
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      render: (_, dataObject) => {
        return (
          <div>
            <Button
              danger
              type="primary"
              onClick={() => {
                handleDeleteMovie(dataObject.maPhim);
              }}
            >
              Xóa
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Table columns={columns} dataSource={listMovie} />
    </div>
  );
}
