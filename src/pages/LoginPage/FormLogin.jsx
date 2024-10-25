import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActionService, setUserAction } from "../../redux/userSlice";
// import { movieService } from "../../services/movieService";

const FormLogin = () => {
  let navigate = useNavigate();
  //hook dùng để gọi action từ redux / đưa dữ liệu lên store
  let dispatch = useDispatch();

  const onFinishNew = (values) => {
    dispatch(loginActionService(values))
      .unwrap()
      .then((result) => {
        let dataJson = JSON.stringify(result);
        localStorage.setItem("USER_LOGIN", dataJson);
        navigate("/");
      })
      .catch((err) => {});
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   movieService
  //     .taiKhoanNguoiDung(values)
  //     .then((result) => {
  //       //đưa dữ liệu lên store redux = dispatch
  //       dispatch(setUserAction(result.data.content));
  //       // đẩy xuống localStorage để giữ trạng thái đăng nhập khi reload trang
  //       let dataJson = JSON.stringify(result.data.content);
  //       localStorage.setItem("USER_LOGIN", dataJson);
  //       //admin -> cho phép vào trang quản lý user
  //       //user -> không cho phép
  //       if (result.data.content.maLoaiNguoiDung === "QuanTri") {
  //         navigate("/list-user");
  //         // window.location.href = "/";
  //       } else navigate("/");

  //       message.success("Đăng nhập thành công");
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log("Thất bại", err);
  //       message.error("Đăng nhập thất bại");
  //     });
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        // giá trị đăng nhập mặc định
        taiKhoan: "mafia",
        matKhau: "8386",
      }}
      onFinish={onFinishNew}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Tài khoàn không được bỏ trống",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được bỏ trống",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" block>
          ĐĂNG NHẬP
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
