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
/* On considère le premier élément comme une liste triée de longueur 1. On range ensuite le
second élément pour constituer une liste triée de longueur 2, puis on range le troisième élément
pour avoir une liste triée de longueur 3 et ainsi de suite...
Le principe du tri par insertion est donc d'insérer à la nième itération le nième élément à la bonne
place. */

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

/* l'idée du tri par sélection est de prendre le plus petit élément dans le tableau 
pour le mettre en premier, ensuite de reprend à partie du deuxième élément, et on recommence
l'opération, jusqu'à la fin. */

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

/* Le principe du tri à bulles est de comparer 2 à 2 les éléments consécutifs d'un tableau 
et de les permuter si le 1er élément est plus petit que le second.
Le tri s'arrête quand il n'y a plus de permutation. */

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

/* On pourrait l'appeler le tri de César.
Le tri par fusion :
-divise la liste à trier en 2
-trie chacune d'elles (en divisant encore par 2)
-fusionne les 2 moitiés de liste en une */

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

/* le tr irapide est considèré comme le plus efficace, car son principe est
 d'ordonner le vecteur en cherchant son pivot pour s'en servir pour réorganiser les éléments de la liste.
 On prend, d'aileurs souvent le dernier élément du tableau.
 On permute ces élémentsde façon à ce que pour j, ts les éléments inférieurs soit ds le tab (j+1).
 On mets ensuite le pivot à la position j.
 On tri ensuite, de façon récursive la partie dont les éléments st inférieurs au pivot
 et idem pour les éléments sup au pivot */

// function triRapide(tab, first = 0, last = tab.length - 1) {
//     // tab = [...tab];
//     let tabSort = tab;
//     if (first < last) {
//         pi = last;
//         pi = partitionner(tabSort, first, last, pi);
//         triRapide(tabSort, first, pi - 1);
//         triRapide(tabSort, pi + 1, last);
//     }
//     return tabSort;
// }

// function partitionner(tab, first, last, pivot) {
//     swap(tab, pivot, last);
//     let j = first;
//     for (i = first; i < last - 1; i++) {
//         if (tab[i] <= tab[last]) {
//             swap(tab, i, j);
//             j = j + 1;
//         }
//     }
//     swap(tab, last, j);
//     return j;
// }
// console.log(triRapide(tab));