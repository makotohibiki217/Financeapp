let transaksi = [

{
nama:"Bonus Proyek",
jumlah:2000000,
tipe:"income",
kategori:"bonus"
},

{
nama:"Makan Pagi",
jumlah:20000,
tipe:"expense",
kategori:"need"
},

{
nama:"Rokok",
jumlah:30000,
tipe:"expense",
kategori:"want"
},

{
nama:"Nongkrong Cafe",
jumlah:120000,
tipe:"expense",
kategori:"want"
},

{
nama:"Sabun & Tissue",
jumlah:85000,
tipe:"expense",
kategori:"need"
}

];


function rupiah(n){

return "Rp " + n.toLocaleString("id-ID");

}


function loadDashboard(){

let income = 0;
let expense = 0;

let need = 0;
let want = 0;
let save = 0;

transaksi.forEach(t=>{

if(t.tipe==="income"){

income += t.jumlah;
save += t.jumlah;

}else{

expense += t.jumlah;

if(t.kategori==="need") need += t.jumlah;
if(t.kategori==="want") want += t.jumlah;

}

});

let balance = income-expense;

document.getElementById("income").innerText = rupiah(income);
document.getElementById("expense").innerText = rupiah(expense);
document.getElementById("balance").innerText = rupiah(balance);
document.getElementById("saving").innerText = rupiah(save);

document.getElementById("needBar").style.width = (need/expense*100)+"%";
document.getElementById("wantBar").style.width = (want/expense*100)+"%";
document.getElementById("saveBar").style.width = (save/income*100)+"%";

loadRecent();

}


function loadRecent(){

let list = document.getElementById("recentList");

list.innerHTML="";

transaksi.slice().reverse().forEach(t=>{

let li = document.createElement("li");

let nama = document.createElement("span");
nama.innerText = t.nama;

let jumlah = document.createElement("span");

jumlah.innerText = rupiah(t.jumlah);

jumlah.className = t.tipe==="income" ? "plus":"minus";

li.appendChild(nama);
li.appendChild(jumlah);

list.appendChild(li);

});

}


loadDashboard();