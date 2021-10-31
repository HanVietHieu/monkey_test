// ẩn hiện câu hỏi
var x = document.getElementById('chiTiet');

function show() {
    var trnghiem = localStorage.getItem('trnghiem');
    console.log('fkbjsafkjskjaf' + typeof trnghiem);
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

//   đẩy dữ liệu vào local
var numb_2 = localStorage.getItem('numb_2');

function save() {
    if (numb_2 == 1) {
        let cauHoi = document.getElementById('cauHoi').value;
        let repA = document.getElementById('repA').value;
        let repB = document.getElementById('repB').value;
        let repC = document.getElementById('repC').value;
        let repD = document.getElementById('repD').value;
        let dapAn = '';

        if (document.getElementById('daA').checked) {
            dapAn = 'A';
        } else if (document.getElementById('daB').checked) {
            dapAn = 'B';
        } else if (document.getElementById('daC').checked) {
            dapAn = 'C';
        } else {
            dapAn = 'D';
        }

        console.log(cauHoi, repA, repB, repC, repD, dapAn);

        let trnghiem = localStorage.getItem('trnghiem') ? JSON.parse(localStorage.getItem('trnghiem')) : [];

        trnghiem.push({
            cauHoi: cauHoi,
            repA: repA,
            repB: repB,
            repC: repC,
            repD: repD,
            dapAn: dapAn
        });

        localStorage.setItem('trnghiem', JSON.stringify(trnghiem));

        console.log(trnghiem);
    }

}

function list() {
    let trnghiem = localStorage.getItem('trnghiem') ? JSON.parse(localStorage.getItem('trnghiem')) : [];

    let content = '';
    trnghiem.forEach((trnghiem, index) => {
        let id = index;
        index++;

        content += `
        <div class="togget">
        <p><h3>Câu hỏi</h3>${trnghiem.cauHoi}</p>
        <button  class="custom-btn btn">${trnghiem.repA}</button>
        <button  class="custom-btn btn">${trnghiem.repB}</button>
        <button  class="custom-btn btn">${trnghiem.repC}</button>
        <button  class="custom-btn btn">${trnghiem.repD}</button>

        <p style="color: brown;">Câu trả lời đúng là:</p>
        <button class="custom-btn btn_1">${trnghiem.dapAn}</button></div>
        <button class="custom-btn btn" onclick="deletee()">Xóa dữ liệu</button>
        <a href="index_add.html"><button class="custom-btn btn">edit</button></a>
        </div>
        `;
    });

    document.getElementById('chiTiet').innerHTML = content;
}
// xóa dữ liệu
function deletee(id) {
    let trnghiem = localStorage.getItem('trnghiem') ? JSON.parse(localStorage.getItem('trnghiem')) : [];
    trnghiem.splice(id, 1);
    alert('Xóa câu hỏi thành công');

    localStorage.setItem('trnghiem', JSON.stringify(trnghiem));
    list();
}