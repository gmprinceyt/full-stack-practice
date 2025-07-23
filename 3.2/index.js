// const express = require('express');
// const app = express();

// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)

// app.use((req,res,next)=> {
//   const userId = req.headers["user-id"];

//   if (numberOfRequestsForUser[userId]){
//     if ( numberOfRequestsForUser[userId]  <= 5){
//        numberOfRequestsForUser[userId] += 1;
//        next();
//     } else {
//       return res.status(400).json({
//         yourrequestLimitExpire:  numberOfRequestsForUser[userId] 
//       })
//     }
//   } else {
//     numberOfRequestsForUser[userId] = 1;
//     next();
//   }
// })

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.listen(3000)


// const jwt = require('jsonwebtoken');
// const express = require("express");
// const fs = require('fs')
// const app = express()


// app.use(express.json());
// const JWT_SCREAT = "123456";

// app.post("/", (req,res) => {
//     const {password, email} = req.body;
//     const user = jwt.sign(email, JWT_SCREAT);

//     fs.readFile('./user.json', 'utf-8', (err, data)=> {
//         if (err){
//             return res.send(err.message)
//         };

//         const oldUser = JSON.parse(data);
//         oldUser.push({user});

//         fs.writeFile('./user.json', JSON.stringify(oldUser, null,2), (err)=> {
//             if(err){
//                 return res.send(err.message)
//             }
//         })
//     });
//     res.json({
//         password,
//         user
//     })
// });

// app.get('/', (req,res)=> {
//     const {token } = req.headers;

//     const decode = jwt.decode(token);
//     const verify = jwt.verify(token, JWT_SCREAT);

//     res.json({
//         decode,
//         verify
//     })
// })

// app.listen(3000)


// ? Assignment

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();


app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    const find = ALL_USERS.find(data => data.username === username);
    if (find) return true;
    return false
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username },jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username

    const users =  ALL_USERS.filter((data) => data.username === username)
    res.json({
        users
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)