var textInput = document.getElementById("textInput");
var morseOutput = document.getElementById("morseOutput");

// var arr = [];
// for(i=0; i<10; i++){
//     arr.push(Math.round(Math.random()*300));
// }
// arr.sort((a, b) => a - b);
// var k = Math.round(Math.random()*300);
// console.log("K: "+k);
// var low = 0;
// var high = arr.length - 1;
// var count = 0;

// while(true){
//     if(arr[low] > k || arr[high] < k){
//         console.log("RESULT!: -1");
//         break;
//     }
//     let mid = low + Math.round((high-low)*(k - arr[low])/(arr[high] - arr[low]));
//     //console.log((k - arr[low]))//(arr[high] - arr[low])))
//     let arrString = "";
//     for(i=0; i<arr.length; i++){
//         arrString += arr[i] + "  ";
//     }
//     console.log(arrString);
//     console.log("Low: "+low+" High: "+high+" Mid: "+mid);
//     let pL = low;
//     let pH = high;
//     if(arr[mid] == k){
//         console.log("RESULT!: "+mid);
//         break;
//     }
//     if(high == low+1){
//         if(arr[high] == k){
//             console.log("RESULT!: "+high);
//             break;
//         }
//         console.log("RESULT!: -1");
//         break;
//     }
//     if(arr[mid] < k){
//         low = mid;
//         if(low == pL){
//             low++;
//         }
//     } else {
//         high = mid;
//         if(high == pH){
//             high--;
//         }
//     }
    
//     count++;
//     if(count == 20){
//         break;
//     }
// }

textInput.onkeyup = function() 
{
    morseOutput.innerText = stringToMorse(textInput.value);
}

function stringToMorse(stringInput)
{
    let charArr = stringInput.split("");
    var returnVal = "";
    for(i=0; i<charArr.length; i++){
        returnVal += charToMorse(charArr[i]);
    }
    return returnVal;
}

function charToMorse(charInput)
{
    switch (charInput) {
        case " ":
         return "    \n";
        break;
        case ".":
         return ". ___ . ___ . ___   \n";
        break;
        case ",":
         return "___ ___ . . ___ ___   \n";
        break;
        case "?":
         return ". . ___ ___ . .   \n";
        break;
        case "@":
         return ". ___ ___ . ___ .   \n";
        break;
        case "/":
         return "___ . . ___ .   \n";
        break;
        case "1":
         return ". ___ ___ ___ ___   \n";
        break;
        case "2":
         return ". . ___ ___ ___   \n";
        break;
        case "3":
         return ". . . ___ ___   \n";
        break;
        case "4":
         return ". . . . ___   \n";
        break;
        case "5":
         return ". . . . .   \n";
        break;
        case "6":
         return "___ . . . .   \n";
        break;
        case "7":
         return "___ ___ . . .   \n";
        break;
        case "8":
         return "___ ___ ___ . .   \n";
        break;
        case "9":
         return "___ ___ ___ ___ .   \n";
        break;
        case "0":
         return "___ ___ ___ ___ ___   \n";
        break;
        case "a":
         return ". ___   \n";
        break;
        case "b":
         return "___ . . .   \n";
        break;
        case "c":
         return "___ . ___ .   \n";
        break;
        case "d":
         return "___ . .   \n";
        break;
        case "e":
         return ".   \n";
        break;
        case "f":
         return ". . ___ .   \n";
        break;
        case "g":
         return "___ ___ .   \n";
        break;
        case "h":
         return ". . . .   \n";
        break;
        case "i":
         return ". .   \n";
        break;
        case "j":
         return ". ___ ___ ___   \n";
        break;
        case "k":
         return "___ . ___   \n";
        break;
        case "l":
         return ". ___ . .   \n";
        break;
        case "m":
         return "___ ___   \n";
        break;
        case "n":
         return "___ .   \n";
        break;
        case "o":
         return "___ ___ ___   \n";
        break;
        case "p":
         return ". ___ ___ .   \n";
        break;
        case "q":
         return "___ ___ . ___   \n";
        break;
        case "r":
         return ". ___ .   \n";
        break;
        case "s":
         return ". . .   \n";
        break;
        case "t":
         return "___   \n";
        break;
        case "u":
         return ". . ___   \n";
        break;
        case "v":
         return ". . . ___   \n";
        break;
        case "w":
         return ". ___ ___   \n";
        break;
        case "x":
         return "___ . . ___   \n";
        break;
        case "y":
         return "___ . ___ ___   \n";
        break;
        case "z":
         return "___ ___ . .   \n";
        break;
        case "A":
         return ". ___   \n";
        break;
        case "B":
         return "___ . . .   \n";
        break;
        case "C":
         return "___ . ___ .   \n";
        break;
        case "D":
         return "___ . .   \n";
        break;
        case "E":
         return ".   \n";
        break;
        case "F":
         return ". . ___ .   \n";
        break;
        case "G":
         return "___ ___ .   \n";
        break;
        case "H":
         return ". . . .   \n";
        break;
        case "I":
         return ". .   \n";
        break;
        case "J":
         return ". ___ ___ ___   \n";
        break;
        case "K":
         return "___ . ___   \n";
        break;
        case "L":
         return ". ___ . .   \n";
        break;
        case "M":
         return "___ ___   \n";
        break;
        case "N":
         return "___ .   \n";
        break;
        case "O":
         return "___ ___ ___   \n";
        break;
        case "P":
         return ". ___ ___ .   \n";
        break;
        case "Q":
         return "___ ___ . ___   \n";
        break;
        case "R":
         return ". ___ .   \n";
        break;
        case "S":
         return ". . .   \n";
        break;
        case "T":
         return "___   \n";
        break;
        case "U":
         return ". . ___   \n";
        break;
        case "V":
         return ". . . ___   \n";
        break;
        case "W":
         return ". ___ ___   \n";
        break;
        case "X":
         return "___ . . ___   \n";
        break;
        case "Y":
         return "___ . ___ ___   \n";
        break;
        case "Z":
         return "___ ___ . .   \n";
        break;
    }
    return "";
}