import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlaceOrder extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="alert alert-success  mt-3 mb-3" role="alert">
          <h3 className="text-center">Chỉ 2 bước là xong. Chúng tôi quý trọng thời gian của bạn</h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <legend>1. ĐĂNG KÝ TÀI KHOẢN</legend>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="gender" id="maleGender" value="male" /> Anh
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="gender" id="femaleGender" value="female" /> Chị
                  </label>
                </div>
                <div className="form-group">
                  <input type="text" name="name" id="name" placeholder="Họ và tên" autoFocus className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" name="phone" id="phone" placeholder="Số điện thoại" autoFocus className="form-control" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <legend>GIAO HÔM NAY</legend>
                <table class="table">
                  <tbody>
                    <tr>
                      <th>Sản phẩm mẫu 3ml</th>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>Tạm tính</td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>Phí vận chuyển</td>
                      <td>20.000đ</td>
                    </tr>
                    <tr>
                      <th>TRẢ HÔM NAY</th>
                      <td>20.000đ</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        <button className="btn btn-success">ĐẶT DÙNG THỬ</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <legend>2. ĐỊA CHỈ VÀ THỜI GIAN GIAO HÀNG</legend>
                <div className="form-group form-row">
                  <div className="col">
                    <select className="form-control">
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-control">
                      <option>Quận/Huyện</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="address" id="address" placeholder="Số nhà, tên đường, phường/xã" autoFocus className="form-control" />
                </div>
                <div className="form-group form-row">
                  <div className="col">
                    <select className="form-control">
                      <option>Hôm nay 04/10</option>
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-control">
                      <option>Trong giờ hành chính</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" name="note" id="note" placeholder="Ghi chú thêm (Không bắt buộc)" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <legend>GIAO VÀ THU TIỀN NGÀY 11/10</legend>
                <table class="table">
                  <tbody>
                    <tr>
                      <th>Sản phẩm tiêu chuẩn 10ml</th>
                      <td>180.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceOrder;
