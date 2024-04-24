// const dotenv = require("dotenv");
// dotenv.config();

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

// const path = require("path");
// // console.log(`Склеить участки пути`, path.join(__dirname, "first", "second"));

// const fullPath = path.resolve(__dirname, "first", "second");
// console.log(fullPath);
// console.log(`Парсинг пути`, path.parse(fullPath));

// // !!!!!!!!!!!!!!

// const siteURL = "http://localhost:8080/users?id=5123";

// const url = new URL(siteURL);

// console.log(`url`,url);
// // !!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!

// const fs = require("fs");
// const path = require("path");

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}

// 	console.log("папка создана");
// });

// console.log("END");

// // !!!!!!!!!!!!!!!!!!
// const fs = require("fs");
// const path = require("path");

// const text = process.env.TEXT || "";
// writeFileAsync(path.resolve(__dirname, "text.txt"), text)
// 	.then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
// 	.then((data) => data.split(" ").length)
// 	.then((count) =>
// 		writeFileAsync(
// 			path.resolve(__dirname, "count.txt"),
// 			`Количество слов - ${count}`
// 		)
// 	);

// const os = require("os");
// const cluster = require("cluster");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
// 	for (let i = 0; i < os.cpus().length - 2; i++) {
// 		cluster.fork();
// 	}
// } else {
// 	console.log(`Воркер с pid  = ${process.pid} запущен`);

// 	setInterval(() => {
// 		console.log(`Воркер с pid = ${process.pid} still working`);
// 	}, 5000);
// }

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const Emitter = require("events");

// const emitter = new Emitter();

// emitter.on("message", (data, second, third) => {
// 	console.log("You sent the massage" + data);
// 	console.log("Second argument" + second);
// });

// const MESSAGE = process.env.message || "";

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123)
// }

// const path = require("path");
// const fs = require("fs");

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// });
// 1111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const fs = require("fs");
// const path = require("path");
// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data);
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const fs = require("fs");
// const path = require("path");

// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const fs = require("fs");
// const http = require("http");
// http.createServer((req, res) => {
// 	// req - readable stream
// 	//  res writeable stream

// 	const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

// 	stream.pipe(res);
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const PORT = process.env.PORT || 5000;
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");

const app = new Application();
app.use(jsonParser);
app.addRouter(userRouter);

app.listen(PORT, () => {
	console.log(`Server started  on  PORT  ${PORT}`);
});
