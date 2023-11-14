function generateRandomString(length) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateRandomID() {
  var part1 = ['111', '112'];
  var part2 = ['590', '598', 'C52', 'C53', 'C71'];
  var part3 = Math.floor(Math.random() * 999).toString().padStart(3, '0');
  return part1[Math.floor(Math.random() * part1.length)] +
         part2[Math.floor(Math.random() * part2.length)] +
         part3;
}

function generateDummyCSV(numStudents) {
  var departments = ['資工系', '資工所', '電資AI', '電資資安', '創新AI'];
  var csvContent = '序號,班級,學號,GitHub';


  for (var i = 1; i <= 10; i++) {
    csvContent += ',作業' + i;
  }
  csvContent += '\\n';


  for (var i = 1; i <= numStudents; i++) {
    var studentData = [
      i,
      departments[Math.floor(Math.random() * departments.length)],
      generateRandomID(),
      generateRandomString(10)
    ];

  
    for (var j = 1; j <= 10; j++) {
      studentData.push(Math.floor(Math.random() * 11));
    }

    csvContent += studentData.join(',') + '\\n';
  }

  return csvContent;
}


var dummyCSV = generateDummyCSV(120);
console.log(dummyCSV);