// let data=
// [
//     {
//         name: 'Yashvi',
//         age: 22,
//         marks :[50,20,30,40,56],
//     },
//     {
//         name: 'Komal',
//         age: 23,
//         marks :[50,20,30,40,56],
//     }
// ];
//
//
// let headers =['name', 'age', 'sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'total_marks', 'percentage'];
//
// let myTable = document.querySelector('#tab');
//
// // click event is added to the button
// let btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//
//   //for tabel element
//   let table = document.createElement('table');
//
// // for table-heading
//   let header_row = document.createElement('tr');
//   headers.forEach(headerData => {
//     let header = document.createElement('th');
//     let textNode = document.createTextNode(headerData);
//     header.appendChild(textNode);
//     header_row.appendChild(header);
//   });
//   table.appendChild(header_row);
//
// //  for table data or table body
//   data.forEach(tableBody => {
//     let rows= document.createElement('tr');
//     console.log();
//   // Object.values(data).flat().forEach(data => {
//   //     let cell = document.createElement('td');
//   //     let textNode = document.createTextNode(data);
//   //     cell.appendChild(textNode);
//   //     rows.appendChild(cell);
//   //   });
//   //   table.appendChild(rows);
//   //
//   // });
//   data.name.forEach(name => {
//   let  n = document.createElement('td');
//   let textNode = document.createTextNode(name);
//   n.appendChild(textNode);
//   rows.appendChild(n);
//   });
//
// //table is attached to div
//
//   myTable.appendChild(table);
// })


let data=
[
    {
        name: 'Yashvi',
        age: 22,
        marks :[50,20,30,40,56],
    },
    {
        name: 'Komal',
        age: 23,
        marks :[52,20,30,40,56],
    }
];

data.map( text => {
let rows= document.createElement('tr');
rows.insertCell().innerHTML= text.name ;
rows.insertCell().innerHTML= text.age ;

text.marks.map(subMarks=> {
rows.insertCell().innerHTML= subMarks;

})

let total = text.marks.reduce((total,num)=>total+num);
rows.insertCell().innerHTML= total;

let percent = (total*100)/500 ;
rows.insertCell().innerHTML= percent;

document.getElementById('tab').appendChild(rows);
})
