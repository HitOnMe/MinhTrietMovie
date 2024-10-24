import React, { useEffect } from "react";

import { Button, message, Table, Tag } from "antd";
import { useState } from "react";
import { adminService } from "../../services/fetchAPI";

export default function UserTab() {
  const [listUser, setListUser] = useState([]);

  let fetchListUser = () => {
    adminService
      .layDanhSachNguoiDung()
      .then((res) => {
        // if (res.data.content.maLoaiNguoiDung === "QuanTri") {
        // }
        console.log(res.data.content);
        setListUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchListUser();
  }, []);

  let handleDelete = async (taiKhoan) => {
    try {
      let result = await adminService.xoaNguoiDung(taiKhoan);
      console.log(taiKhoan);
      message.success("Xóa thành công");
      //gọi lại api lấy danh sách user sau khi xóa thành công, vì trang không tự động load lại
      fetchListUser();
    } catch (error) {
      console.log(error);
      message.error("Xóa thất bại");
    }
  };

  const columns = [
    {
      title: "Tên tài khoản",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (_, dataObject) => {
        if (dataObject.maLoaiNguoiDung === "KhachHang")
          return <Tag color="green">Khách hàng</Tag>;
        else return <Tag color="red">Quản trị</Tag>;
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
                handleDelete(dataObject.taiKhoan);
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
      <Table columns={columns} dataSource={listUser} />
    </div>
  );
}
