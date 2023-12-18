let soLuongLa = {
  1: 31,
  2: 31,
  3: 31,
  4: 31,
  5: 31,
  6: 31,
  7: 31,
  8: 31,
  9: 31,
  10: 127,
};

let soLanBoc = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};

const tongSoBaiElement = document.getElementById("tongSoBai");
let tongSoBaiValue = tongSoBaiElement.getAttribute("value");

function bocBai(bai) {
  tongSoBaiElement.textContent = tongSoBaiValue;

  if (soLuongLa[bai] > 0) {
    soLuongLa[bai]--;
    soLanBoc[bai]++;
    tongSoBaiValue--;
  }

  capNhatUI(bai);
}

function capNhatUI(bai) {
  const phanTuDem = document.getElementById(`dem${bai}`);
  const phanTuTiLe = document.getElementById(`tyle${bai}`);
  const phanTuConLai = document.getElementById(`conlai${bai}`);

  phanTuDem.textContent = soLanBoc[bai];

  const tiLe = ((soLuongLa[bai] / tongSoBaiValue) * 100).toFixed(2);
  phanTuTiLe.textContent = `${tiLe}%`;

  phanTuConLai.textContent = `${soLuongLa[bai]}`;
  tongSoBaiElement.textContent = tongSoBaiValue;

  // Cập nhật các số khác
  for (let i = 1; i <= 10; i++) {
    const phanTuDemKhac = document.getElementById(`dem${i}`);
    const phanTuTiLeKhac = document.getElementById(`tyle${i}`);
    const phanTuConLaiKhac = document.getElementById(`conlai${i}`);

    phanTuDemKhac.textContent = soLanBoc[i];

    const tiLeKhac = ((soLuongLa[i] / tongSoBaiValue) * 100).toFixed(2);
    phanTuTiLeKhac.textContent = `${tiLeKhac}%`;

    phanTuConLaiKhac.textContent = `${soLuongLa[i]}`;
  }
}

function resetThongSo() {
  soLuongLa = {
    1: 31,
    2: 31,
    3: 31,
    4: 31,
    5: 31,
    6: 31,
    7: 31,
    8: 31,
    9: 31,
    10: 127,
  };

  soLanBoc = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };

  tongSoBaiValue = parseInt(tongSoBaiElement.getAttribute("value"));

  for (let i = 1; i <= 10; i++) {
    const phanTuDemKhac = document.getElementById(`dem${i}`);
    const phanTuTiLeKhac = document.getElementById(`tyle${i}`);
    const phanTuConLaiKhac = document.getElementById(`conlai${i}`);

    phanTuDemKhac.textContent = soLanBoc[i];

    const tiLeKhac = ((soLuongLa[i] / tongSoBaiValue) * 100).toFixed(2);
    phanTuTiLeKhac.textContent = `${tiLeKhac}%`;

    phanTuConLaiKhac.textContent = `${soLuongLa[i]}`;
  }

  tongSoBaiElement.textContent = tongSoBaiValue;
}

// Gắn hàm resetThongSo vào nút reset
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetThongSo);
