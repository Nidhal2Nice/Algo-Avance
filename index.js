const tab = [3, 0, -7, 1, 4, -2, 8, 4, 5];
let n = tab.length;
// let changed = true;

// while (changed) {
//     changed = false;
//     for(let i = 0; i < tab.length; i++) {
//         if (tab [i] > tab [i + 1]) {
//              let tmp = tab [i];
//              tab[i] = tab[i + 1];
//              tab[i + 1] = tmp;
//             changed = true;
//         }
//     }
// }
// console.log(tab);

//========================Tri par insertion =======================//
function swap(tab, i, j) {
    const temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
}
// function tri_insertion(tab) {
//     let n = tab.length;

//     for (i = 1; i < n; i++) {
//         temp = tab[i];
//         j = i;
//         while (j > 0 && tab[j - 1] > temp) {
//             swap(tab, j, j - 1);
//             j = j - 1;
//         }
//         tab[j] = temp;
//     }
// }
// tri_insertion(tab);
// console.log(tab);

//========================Tri par sélection =======================//
// function swap(tab, i, j) {
//     const temp = tab[i];
//     tab[i] = tab[j];
//     tab[j] = temp;
// }
// function tri_selection(tab) {
//     const n = tab.length;
//     for (i = 0; i < n; i++) {
//         min = i;
//         for (j = i + 1; j < n; j++) {
//             if (tab[j] < tab[min]) {
//                 min = j;
//             }
//         }
//         swap(tab, i, min);
//     }
//     return tab;
// }
// console.log(tri_selection(tab));

//========================Tri par bulles =======================//


function tri_bulle(tab) {
    let permut = true;
    while (permut) {
        permut = false;
        for (let i = 0; i < n - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                swap(tab, i, i + 1);
                permut = true;
            }
        }
    }
}
tri_bulle(tab);
console.log(tab);

//========================Tri par fusion =======================//

