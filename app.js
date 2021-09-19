//All requires

const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

// Create Express app
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// Base middlewares
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Variables
const usuarios = [];

// Routes

app.get("/inicio", (req, res) => {
  //Render using EJS
  res.render("inicio", {});
});

app.get("/game", (req, res) => {
  //Render using EJS
  res.render("game", {});
});

app.post("/game", (req, res) => {
  //Render using EJS
  res.render("game", {});
});

app.get("/signup", (req, res) => {
  //Render using EJS
  res.render("signup", {
    title: "SignUp",
  });
});

app.post("/signup", async (req, res) => {
  const usuario = req.body;

  //Hash password
  usuario.clave = await bcrypt.hash(req.body.clave, 12);

  //Validte
  usuarios.push(usuario);

  //Render using EJS
  res.render("signup", {
    title: "SignUp",
  });
});

app.get("/login", (req, res) => {
  //Render using EJS
  res.render("login", {
    title: "GO!",
  });
});

app.post("/login", async (req, res) => {
  const { usuario, clave } = req.body;
  let usuarioObj = null;
  let resultado = false;

  //User name
  usuarios.forEach((usr) => {
    if (usr.usuario === usuario) {
      usuarioObj = usr;
    }
  });

  //Found user
  if (usuarioObj !== null) {
    resultado = await bcrypt.compare(clave, usuarioObj.clave);
  }

  //If true redirect to home
  if (resultado) {
    res.redirect("/game");
    return;
  }

  res.render("login", {
    title: "GO!",
  });
});


//Hardcoded question
const questions = [
  {
    id: 1,
    question: "¿Cual es la Capital de Brasil?",
    responses: [
      {
        id: 1,
        response: "Brasilia",
        valid: true,
      },
      {
        id: 2,
        response: "Montevideo",
        valid: false,
      },
      {
        id: 3,
        response: "Lima",
        valid: false,
      },
    ],
  },
  {
    id: 2,
    question: "Pregunta 2",
    responses: [
      {
        id: 1,
        response: "Respuesta 1",
        valid: false,
      },
      {
        id: 2,
        response: "Respuesta 2",
        valid: true,
      },
      {
        id: 3,
        response: "Respuesta 3",
        valid: false,
      },
    ],
  },
];

app.get("/get-question", (req, res) => {
  const randomIndex = 0;// Random question index between (0 - questions.length)
  const question = questions[randomIndex];

  //Need to remove some properties before send it to frontend
  const questionFiltered = {
    id: question.id,
    question: question.question,
    //Do map to return a copy of responses and remove valid key
    responses: question.responses.map((response) => {
      return {
        id: response.id,
        response: response.response,
      };
    }),
  };

  //Log question filtered
  console.log(questionFiltered);

  //Send to frontend in response
  res.send(questionFiltered);
});

 //Validate answer
app.post("/validate-question", (req, res) => {});




// Start server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
