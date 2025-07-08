// function fetchData (){
//     console.log("data Fetching...");
//     setTimeout(()=> {
//         console.log("Data Received From Server {]")
//     },2000)
// };

// fetchData();

// setTimeout(function(){
//     console.log("click the button");
// },1000)

// let sum = 0;
// for (let i = 1; i <= 10000000000; i++){
//     sum += i;
// }
// console.log(sum);

// Function to simulate downloading data
// function downloadData(callback) {
//     setTimeout(function() {
//         console.log("Data downloading");
//         callback("Downloaded Data");
//     }, 1000);
// }

// // Function to simulate processing the downloaded data
// function processData(data, callback) {
//     setTimeout(function() {
//         console.log("Data processed");
//         callback("Processed " + data);
//     }, 1000);
// }

// // Initiating the process
// downloadData(
//     function (downloadedData){
//         processData(downloadedData, function (data){
//             console.log('Final Data Here: ',data);
//         })
//     }
// )

// ? More Example

// function DownloadFile(callback){
//     setTimeout(function(){
//         console.log('Downloading File.. ');
//         callback("file Data Downloaded ")
//     },1000);
// }

// function processFileDownloading(file, callback){
//     //logic
//     console.log("processFile Data...");
//     setTimeout(function (){
//         callback("Process Success: " + file);
//     },1000)
// }

// DownloadFile(function(file){
//     processFileDownloading(file, function (fileData){
//         console.log('Final File Data: ', fileData)
//     })
// })

// function DownloadFile() {
//   return new Promise((resolve, reject) => [
//     setTimeout(() => {
//       console.log("File Downloading");
//       resolve("file Dowmloaded");
//     }, 1000),
//   ]);
// }

// function processFileDownloading(data) {
//   return new Promise((resovle, reject) => {
//     setTimeout(() => {
//       console.log("File Processed..");
//       resovle("Process Success : " + data);
//     }, 1000);
//   });
// }

// DownloadFile()
//   .then(processFileDownloading)
//   .then((data) => {
//     console.log("final Data Here :", data);
//   }).catch((error)=> {
//     console.log(error)
//   })

// Function to simulate downloading data, now returns a Promise
// function downloadData() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log("Data downloaded");
//             resolve("Downloaded Data");
//         }, 1000);
//     });
// }


// ? More example 

// // Function to simulate processing the downloaded data, now returns a Promise
// function processData(data) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log("Data processed");
//             resolve("Processed " + data);
//         }, 1000);
//     });
// }

// // Using Promises to handle the asynchronous operations
// downloadData()
//     .then(processData)
//     .then(function(finalResult) {
//         console.log("Final result: " + finalResult);
//     })
//     .catch(function(error) {
//         console.error("An error occurred:", error);
//     });
