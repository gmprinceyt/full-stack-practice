// const express = require("express");

// const app = express();
// let count = 0;
// app.use((req, res, next) => {
//   const start = Date.now();
//   res.locals.startTime = start;

//   res.on("finish", () => {
//     console.log(
//       `${req.method},${req.originalUrl} TimeTaken  ${Date.now() - start}ms`
//     ),
//       console.log(`CountNumberOfRequest:${count}`);
//   });
//   next();
// });
// app.use(express.json());

// function AuthCheckMiddleware(req, res, next) {
//   const { username } = req.headers;
//   const { password } = req.headers;

//   if (username == "prince" && password == "pass") {
//     return next();
//   }
//   return res.status(403).json({
//     mes: "unauthoraize user",
//   });
// }
// function inputCheckMiddleware(req, res, next) {
//   const { id } = req.query;

//   if (Number(id) === 1 || Number(id) === 2) {
//     return next();
//   }
//   return res.status(400).json({
//     mes: "input not vaild user",
//   });
// }

// app.get(
//   "/helth-checkup/",
//   AuthCheckMiddleware,
//   inputCheckMiddleware,
//   function (req, res) {
//     count++;
//     const {kidney} = req.body;
//     console.log(kidney.length)
//     res.json({
//         Success: true,
//         message: "Hello Jee"
//     });
//   }
// );

// // global catches
// app.use((err, req, res, next)=> {
//     res.status(500).json({
//         error: err.message
//     })
// })


// app.listen(3000);




// const express = require("express");
// const app = express();
// const zod = require("zod");

// app.use(express.json());
// const schema = zod.object({
//     email: zod.email(),
//     password: zod.string().min(8)
// });



//? zod
// function vaildition({email, password}){
//   const schema = zod.object({
//     email: zod.string(zod.email()),
//     password: zod.string().min(9)
//   })
//   return schema.safeParse({email,password});
// };


// const res = vaildition({
//   email: "prince@gmail.com",
//   password: "password123"
// });

// console.log(res)


// app.get("/", (req, res) => {
//   const login  = req.body;
//   const response = schema.safeParse(login);

//   if (!response.success){
//     return res.status(411).json({
//       response
//     })
//   } 


//   res.json({
//     response,
//   });
// });

// app.listen(3000, () => console.log("Server Runing"));
