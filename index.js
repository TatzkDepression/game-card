let soLuongLa = {
  A: 31,
  2: 31,
  3: 31,
  4: 31,
  5: 31,
  6: 31,
  7: 31,
  8: 31,
  9: 31,
  10: 31,
};

let soLanBoc = {};

function bocBai(bai) {
  if (soLuongLa[bai] > 0) {
    soLuongLa[bai]--;
    if (!soLanBoc[bai]) {
      soLanBoc[bai] = 1;
    } else {
      soLanBoc[bai]++;
    }

    capNhatUI(bai);
  }
}

function capNhatUI(bai) {
  const phanTuDem = document.getElementById(`dem${bai}`);
  const phanTuTiLe = document.getElementById(`tyle${bai}`);
  const phanTuConLai = document.getElementById(`conlai${bai}`);
  const resetButton = document.getElementById(`resetButton${bai}`);

  phanTuDem.textContent = soLanBoc[bai];

  const tongSoBoc = Object.values(soLanBoc).reduce(
    (tong, dem) => tong + dem,
    0
  );
  const tiLe = ((soLanBoc[bai] / tongSoBoc) * 100).toFixed(2);
  phanTuTiLe.textContent = `${tiLe}%`;

  phanTuConLai.textContent = `${soLuongLa[bai]}`;

  // Cập nhật nút reset
  resetButton.style.display = soLuongLa[bai] === 0 ? "block" : "none";
}

function kiemTraHetBai() {
  // Kiểm tra từng quân bài và hiển thị nút reset tương ứng
  for (const bai in soLuongLa) {
    const resetButton = document.getElementById(`resetButton${bai}`);
    resetButton.style.display = soLanBoc[bai] > 0 ? "none" : "block";
  }

  // Kiểm tra nút reset chung cho trò chơi
  const resetButton = document.getElementById("resetButton");
  resetButton.style.display = Object.values(soLengLa).some(
    (soLuong) => soLuong > 0
  )
    ? "none"
    : "block";
}

// Hàm reset lá bài
function resetLaBai(bai) {
  // Khôi phục số lượng lá cho quân bài
  soLuongLa[bai] = 31;
  // Đặt lại số lượt bóc
  soLanBoc[bai] = 0;
  // Cập nhật giao diện
  capNhatUI(bai);
  // Đặt lại tỷ lệ về 0%
  const phanTuTiLe = document.getElementById(`tyle${bai}`);
  phanTuTiLe.textContent = "0%";
}
