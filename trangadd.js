function save() {
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
    } else if (document.getElementById('daD').checked) {
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
    alert("Thêm câu hỏi thành công")

}
// Hiển thị
function list() {
    let trnghiem = localStorage.getItem('trnghiem') ? JSON.parse(localStorage.getItem('trnghiem')) : [];
    let content = '';
    trnghiem.forEach((trnghiem, index) => {
        let id = index;
        index++;
        content += `  
        <p>${trnghiem.cauHoi}</p>
        <button>${trnghiem.repA}</button>
        <button>${trnghiem.repB}</button>
        <button>${trnghiem.repC}</button>
        <button>${trnghiem.repD}</button>
        <p>Câu trả lời đúng là:</p>
        <button>${trnghiem.dapAn}</button>  
        `;
    });
}