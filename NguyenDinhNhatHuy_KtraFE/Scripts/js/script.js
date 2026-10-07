// Khai báo giá sản phẩm cố định để tính toán[cite: 2]
const giaSanPham = 1034550;

// Hàm bắt sự kiện click nút Tăng/Giảm (+ / -)[cite: 1]
function changeQty(amount) {
    let inputSoLuong = document.getElementById("soLuong");
    let soLuongHienTai = parseInt(inputSoLuong.value);
    let soLuongMoi = soLuongHienTai + amount;

    // Đảm bảo số lượng luôn lớn hơn hoặc bằng 1
    if (soLuongMoi >= 1) {
        inputSoLuong.value = soLuongMoi;
        tinhTien(); // Cập nhật lại tổng tiền[cite: 2]
    }
}

// Hàm tính toán giá trị "Tạm tính = Số lượng * Giá sản phẩm" theo yêu cầu đề bài[cite: 2]
function tinhTien() {
    let inputEl = document.getElementById("soLuong");
    let soLuong = parseInt(inputEl.value);

    // Bắt lỗi nếu người dùng tự gõ chữ hoặc gõ số nhỏ hơn 1
    if (soLuong < 1 || isNaN(soLuong)) {
        soLuong = 1;
        inputEl.value = 1;
    }

    // Công thức tính[cite: 2]
    let tongTien = soLuong * giaSanPham;

    // Định dạng tiền tệ kiểu Việt Nam (thêm dấu chấm phân cách hàng nghìn)
    let formattedTien = tongTien.toLocaleString('vi-VN') + '₫';

    // Xuất ra HTML ở id "tamTinh"[cite: 2]
    document.getElementById("tamTinh").innerText = formattedTien;
}
// Hàm thay đổi ảnh chính khi click vào ảnh thu nhỏ
        function changeImage(element) {
            // Lấy trực tiếp đường dẫn (src) của bức ảnh nhỏ vừa bấm và gắn lên ảnh lớn
            document.getElementById("mainImage").src = element.src;

            // Tìm tất cả các ảnh nhỏ để đưa về viền xám mặc định
            var thumbs = document.getElementsByClassName("thumb");
            for (var i = 0; i < thumbs.length; i++) {
                thumbs[i].style.border = "1px solid #ddd";
            }

            // Đổi màu viền thành xanh dương cho ảnh đang được chọn
            element.style.border = "2px solid #0a68ff";
}
// ----------------------------------------------------
// Xử lý Slider Banner tự động nhảy mỗi 4 giây
// ----------------------------------------------------
let currentSlide = 0;
const slides = document.querySelectorAll("#bannerSlider .slide");

if (slides.length > 0) {
    setInterval(function () {
        // Ẩn slide hiện tại
        slides[currentSlide].style.opacity = "0";
        slides[currentSlide].style.zIndex = "0";

        // Chuyển sang slide tiếp theo (Nếu đến cuối thì vòng lại 0)
        currentSlide = (currentSlide + 1) % slides.length;

        // Hiện slide tiếp theo lên
        slides[currentSlide].style.opacity = "1";
        slides[currentSlide].style.zIndex = "1";
    }, 1000); // 1000 mili-giây = 1 giây
}