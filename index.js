const tab = [3, 0, -7, 1, 4, -2, 8, 4, 5];

function swap(tab, i, j) {
    const temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
}


// console.log("avant tri : ", tab);
// function bubbleSort(tab) {
//     let changed = true;
//     while (changed) {
//         changed = false;
//         for (let i = 0; i < tab.length; i++) {
//             if (tab[i] > tab[i + 1]) {
//                 let tmp = tab[i];
//                 tab[i] = tab[i + 1];
//                 tab[i + 1] = tmp;
//                 changed = true;
//             }
//         }
//     }
// }
// bubbleSort(tab);
// console.log("après tri : ", tab);

//========================Tri par insertion =======================//

// function triInsertion(tab) {
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
// triInsertion(tab);
// console.log(tab);
//========================Tri par sélection =======================//

// function swap(tab, i, j) {
//     const temp = tab[i];
//     tab[i] = tab[j];
//     tab[j] = temp;
// }

// function triSelection(tab) {
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
// triSelection(tab);
// console.log(tab);

//========================Tri par bulles =======================//


function triBulle(tab) {
    const n = tab.length;
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
triBulle(tab);
console.log(tab);

//========================Tri par fusion =======================//

// function triFusion(tab) {
//     // tab = [...tab];
//     const n = tab.length;
//     if (n <= 1) {
//         return tab;
//     }
//     let middle = Math.floor(n / 2)
//     let left = tab.slice(0, middle);
//     let right = tab.slice(middle, n);
//     let merge = fusion(triFusion(left), triFusion(right));

//     return merge;
// }
// function fusion(tabA, tabB) {
//     if (tabA.length == 0) {
//         return tabB;
//     }
//     else if (tabB.length == 0) {
//         return tabA;
//     }
//     else if (tabA[0] <= tabB[0]) {
//         let partial_fusion = fusion(tabA.slice(1, tabA.length), tabB);
//         let tab_concat = [tabA[0]].concat(partial_fusion);
//         return tab_concat;
//     }
//     else {
//         let partial_fusion = fusion(tabA, tabB.slice(1, tabB.length));
//         let tab_concat = [tabB[0]].concat(partial_fusion);
//         return tab_concat;
//     }
// }
// triFusion(tab);
// console.log("tri selection")
// console.log("avant tri : ", tab);
// console.log("après tri : ", triFusion(tab));

//========================Tri rapide =======================//

// function triRapide(tab, first, last) {
//     tab = [...tab];
//     const n = tab.length;
//     if (first < last) {
//         pi = part(tab, first, last);
//         triRapide(tab, first, pi - 1);
//         triRapide(tab, pi + 1, last);
//     }
// }

// function partition(tab, first, last, kingpin)