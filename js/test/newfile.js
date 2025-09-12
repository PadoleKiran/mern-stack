// for(let i=1;i<=5;i++){
//     let r = "";
//     for(let j=5-i;j>=1;j--){
//         // process.stdout.write(j);
//         r += j;
//     }
//     console.log(r);
// }

let mat = [[1,2,3],[4,5,6],[7,8,9]];

let row = mat.length;
let col = mat[0].length;
let tr = [];

for(let i=0;i<col;i++){
    tr[i] = [];
    for(let j=0;j<row;j++){
        tr[i][j] = mat[j][i];
    }
    // tr.push(tr[i]);
}


console.log(tr);

for(let )