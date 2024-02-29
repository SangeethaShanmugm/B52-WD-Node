const fs = require("fs")

const quote = "No beauty shines better than that of a good heart😀😀"
// fs.writeFile("awesome.pdf", quote, (err) => {
//     console.log("Completed writing awesome.html")
// })

//Task-1

const quote2 = "Live more worry less😀"
//create below files with quote2 as content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log(`Completed writing text-${i}.html`)
//     })
// }

//Task-2
// node fs.js 20 => 20 files to be created  || note-1.txt, note-2.txt ... note-20.txt

const [, , noOfFiles] = process.argv;

console.log(noOfFiles)

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/note-${i}.txt`, quote2, (err) => {
//         console.log(`Completed writing note-${i}.txt`)
//     })
// }


// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error ❌", err)
//     }
//     console.log(data)
// })

const nicequote = "\nMake everyday a little less ordinarily"

// fs.appendFile("awesome.pdf", nicequote, (err) => {
//     console.log("Completed writing awesome.html")
// })


// fs.unlink("./toRemove.txt", (err) => {
//     console.log("Deleted successfully")
// })

// fs.readdir("./backup", (err, files) => {
//     console.log("All file name", files)
// })

//delete all files in backup folder

// fs.readdir("./backup", (err, files) => {
//     console.log("All file name", files)
//     files.forEach(fileName => {
//         fs.unlink(`./backup/${fileName}`, (err) => {
//             console.log("Deleted successfully", fileName)
//         })

//     })
// })

//writeFile => callStack => WebApi(whoever finishes writing first) => CallBack Q => Event Loop => CallStack

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink => async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync = sync

const [, , n] = process.argv

for (let i = 1; i <= n; i++) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote2)
    console.log(`Completed writing ${i}`)
}