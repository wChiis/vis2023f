const headerList = ['序號', '班級', '學號', '姓名', 'GitHub', '作業一', '作業二', '作業三', '作業四', '作業五', '作業六', '作業七', '作業八',	'作業九',	'作業十'];
const classes = ['資工系', '資工所', '電資AI', '電資資安', '創新AI'];
const FirstID = ["111", "112"];
const SecondID = ["590", "598", "C52", "C53", "C71"];
const characters= '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function randomclass(){
    return classes[Math.random() * classes.length];
}

function generateID(){
  const partOne = FirstID[Math.floor(Math.random() * FirstID.length)];
  const partTwo = SecondID[Math.floor(Math.random() * SecondID.length)];
  const partThree = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, '0');
  
  return partOne + partTwo + partThree;
   }


function generateUsername() {
    let username = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters.charAt(randomIndex);
    }
  
    return username;
  }

 function randomclass(){
    
    return classes[parseInt(Math.random() * classes.length)];
    
  }

 function generateScores() {
    const generatescores = [];
  
    for (let i = 0; i < 10; i++) {
      generatescores.push(Math.floor(Math.random() * 10));
    }
  
    return generatescores;
  }
  
  function generateDummyCsvTable() {
    let divElement = document.getElementById("dummy-csv-table");
    let table = document.createElement("table");
  
    let header = table.createTHead();
    let headerRow = header.insertRow();
  
    for (let i = 0; i < headerList.length; i++) {
      headerRow.insertCell().innerHTML = headerList[i];
    }
  
    for (let index = 1; index <= 120; index++) {
      let row = table.insertRow();
      let className = randomclass();
      let studentId = generateID();
      let studentName = "User";
      let githubId = generateUsername();
      let generatescores = generateScores();
  
      let rowItems = [index, className, studentId, studentName, githubId];
  
      for (let j = 0; j < rowItems.length; j++) {
        var cell = row.insertCell();
        cell.innerHTML = rowItems[j];
      }
      for (let j = 0; j < generatescores.length; j++) {
        var cell = row.insertCell();
        cell.innerHTML = generatescores[j];
      }
    } 
  
    divElement.appendChild(table);
  }
  
  function generateAppleTable() {
    let divElement = document.getElementById("apple-scoreboard-table");
    let table = document.createElement("table");
  
    let header = table.createTHead();
    let headerRow = header.insertRow();
  
    for (let i = 0; i < headerList.length; i++) {
      headerRow.insertCell().innerHTML = headerList[i];
    }
  
    for (let index = 1; index <= 120; index++) {
      let row = table.insertRow();
      let className = randomclass();
      let studentId = generateID();
      let studentName = "User";
      let githubId = generateUsername();
      let generatescores = generateScores();
  
      let rowItems = [index, className, studentId, studentName, githubId];
  
      for (let j = 0; j < rowItems.length; j++) {
        var cell = row.insertCell();
        cell.innerHTML = rowItems[j];
      }
      for (let j = 0; j < generatescores.length; j++) {
        var cell = row.insertCell();
        cell.innerHTML = `<img src='../score/${generatescores[j]}.svg' width='40' height='40'>`;
      }
    } 
  
    divElement.appendChild(table);
  }
