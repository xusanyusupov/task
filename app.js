/////Masala 01
///// Sonlarni kamayish tartibdia yozish
// {
// function descendingOrder(n) {
//     let number = n.toString().split('')

//     number.sort((a,b) => a - b)
//     let tartiblanganSon = number.join('');

//     return parseInt(tartiblanganSon)
// }
// console.log(descendingOrder(572984));

// }

/////Masala 02
///// Yil qaysi asrga tog'ri kelishini hisoblaydi
// {
//     function century(year) {
//         return Math.ceil(year / 100);
//      }
// }

/////Masala 03
///// massivdagi sonlarni qo'shish uchun
// {
//     function yigindi(raqamlar) {
//         if (raqamlar.length === 0) {
//             return 0;
//         }
        
//         return raqamlar.reduce((yigindi, raqam) => yigindi + raqam, 0);
//     }
//     console.log(yigindi());
// }


/////Masala 04
///// Massivdagi true , false larni sanab chiqadi
// {
//     function countSheep(sheeparrey) {
//         let count = 0
//         let fls = 0
//         for(let i = 0; i < sheeparrey.length; i++){
//             if (sheeparrey[i] === false) {
//                 fls ++
//             }
//             if (sheeparrey[i] === true) {
//                 count ++
//             }
//         }
//         return `truelar - ${count} falselar - ${fls}`
//     }

//     console.log(countSheep([true,true,true,true,false]));
// }      


///// Masala 05
///// harflarni kattalashtrish
// {
//  const makeUpporCaase = str => str.toUpperCase()
//  console.log(makeUpporCaase('hello world'));  
// }


/////MAsala 06
// {
//     function welcome(language) {
//         switch (language.toLowerCase()) {
//           case "english":
//             return "Welcome";
//           case "czech":
//             return "Vitejte";
//           case "danish":
//             return "Velkomst";
//           case "dutch":
//             return "Welkom";
//           case "estonian":
//             return "Tere tulemast";
//           case "finnish":
//             return "Tervetuloa";
//           case "flemish":
//             return "Welgekomen";
//           case "french":
//             return "Bienvenue";
//           case "german":
//             return "Willkommen";
//           case "irish":
//             return "Failte";
//           case "italian":
//             return "Benvenuto";
//           case "latvian":
//             return "Gaidits";
//           case "lithuanian":
//             return "Laukiamas";
//           case "polish":
//             return "Witamy";
//           case "spanish":
//             return "Bienvenido";
//           case "swedish":
//             return "Valkommen";
//           case "welsh":
//             return "Croeso";
//           default:
//             return "Welcome"; 
//         }
//       }
      
//       console.log(welcome("french"));
//       console.log(welcome("japanese"));

let pp = document.querySelector('p')
let days = new Date().getDay()
switch (days) {
    case  1:
        pp.innerHTML = `${days} Monday`
        break;
    case 2:
        pp.innerHTML = `${days} Tuesday`
        break;
    case 3:
        pp.innerHTML = `${days} Wednesday`
        break;
    case 4:
        pp.innerHTML = `${days} Thursday`
        break;
    case 5:
        pp.innerHTML = `${days} Friday`
        break;
    case 6:
        pp.innerHTML = `${days} Saturday`
        break;
    case 7:
        pp.innerHTML = `${days} Sunday`
        break;

    default:
        pp.textContent = "error"
        break;
}

let one = document.querySelector('.soat')
function clock() {
    let data = new Date()
    let clk = data.getHours().toString().padStart(2,"0")
    let min = data.getMinutes().toString().padStart(2,"0")
    let sec = data.getSeconds().toString().padStart(2,"0")
    one.innerHTML = `${clk}:${min}:${sec}`
}
clock()

setInterval(()=>{
    clock()
},1000)

let year = document.querySelector('.year');

function yil() {
    let yil = new Date();
    let day = yil.getDate().toString().padStart(2, "0"); 
    let month = (yil.getMonth() + 1).toString().padStart(2, "0"); 
    let years = yil.getFullYear(); // Yilni olish

    year.innerHTML = `${day}.${month}.${years}`;
}

yil();


function zoom() {
    one.style.fontSize = '3.5em';  
    one.style.color = '#fff' 
    year.style.fontSize = '2em';   
    year.style.color = ""   
    one.style.transition = year.style.transition = '.5s ease';  
    
}

function zoomMinus() {
    one.style.fontSize = '2em';    
    one.style.color = ""    
    year.style.fontSize = '3.5em'; 
    year.style.color = '#fff'
    one.style.transition = year.style.transition = '.5s ease';  
}


let dta = document.querySelector('.dta')
let tns = document.querySelector('.tns')



