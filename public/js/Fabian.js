const imgMula = document.getElementById("Mula");
console.log(imgMula);
const imgClickme = document.getElementById("clickme");
console.log(imgClickme);
const start = document.querySelector(".start");
const pregunta1 = document.querySelector(".pregunta1");
const pregunta2 = document.querySelector(".pregunta2");
const imgCharco = document.getElementById("Charco");
console.log(imgCharco);
start.addEventListener("click", () => {
  imgMula.remove();
  imgCharco.remove();
  imgClickme.remove();
  pregunta1.appendChild(imgMula);
  pregunta2.appendChild(imgCharco);
});

function crearQuiz(quiz) {
  const contenedorQuiz = document.createElement("div");
  const nombre = document.createElement("h2");
  const pregunta = document.createElement("p");
  const respuesta = document.createElement("h3");
  const ayuda = document.createElement("h2");
  const imagenImg = document.createElement("img");

  nombre.textContent = quiz.nombre;
  pregunta.textContent = quiz.pregunta;
  respuesta.textContent = quiz.respuesta;
  ayuda.textContent = quiz.ayuda;
  imagenImg.src = quiz.imagen;

  imagenImg.classList.add("imagen");

  contenedorQuiz.appendChild(nombre);
  contenedorQuiz.appendChild(pregunta);
  /*contenedorQuiz.appendChild(respuesta);*/
  /*contenedorQuiz.appendChild(ayuda);*/
  contenedorQuiz.appendChild(imagenImg);

  contenedorQuiz.classList.add("tarjeta-quiz");

  const mimain = document.getElementsByTagName("main");

  mimain[0].appendChild(contenedorQuiz);
}

const preguntas = [
  {
    id: 1,
    nombre: "pregunta1",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Brasil",
    ayuda: "Brasilia es su capital",
    imagen:
      "https://us.123rf.com/450wm/fredex8/fredex81706/fredex8170600117/81175999-contorno-del-mapa-de-brasil-con-la-bandera-brasile%C3%B1a-en-blanco-con-sombras-ilustraci%C3%B3n-3d.jpg?ver=6",
  },
  {
    id: 2,
    nombre: "pregunta2",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Argentina",
    ayuda: "Buenos Aires es su capital",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXv_6s3utAAS6QHaPgdQKq7wHJ89LFof3ra9AUlSbVEv4-nUlhoza_upDQrQ2QycCxsh4&usqp=CAU",
  },
  {
    id: 3,
    nombre: "pregunta3",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Chile",
    ayuda: "Santiago de chile es su capital",
    imagen:
      "https://img2.freepng.es/20180428/zrw/kisspng-flag-of-chile-map-flag-of-mexico-5ae4556d3599f7.9925251615249135172196.jpg",
  },
  {
    id: 4,
    nombre: "pregunta4",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Uruguay",
    ayuda: "Montevideo es su capital",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKimlTEkgcKwUa9z_TjXmWVC8HrDxPwDT6kQ&usqp=CAU",
  },
  {
    id: 5,
    nombre: "pregunta5",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Perú",
    ayuda: "Lima es su capital",
    imagen:
      "https://media.istockphoto.com/vectors/3d-isometric-map-of-peru-with-national-flag-vector-id1318947722?b=1&k=20&m=1318947722&s=170667a&w=0&h=9Pd_HNMt_PONPhb_ZhIdwHxxs15dgr-Tphwr-easyGI=",
  },
  {
    id: 6,
    nombre: "pregunta6",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Colombia",
    ayuda: "Bogotá es su capital",
    imagen:
      "https://www.pngarea.com/pngm/148/8112784_bandera-colombia-png-mapa-de-colombia-con-bandera.png",
  },
  {
    id: 7,
    nombre: "pregunta7",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Ecuador",
    ayuda: "Quito es su capital",
    imagen:
      "https://thumbs.dreamstime.com/b/bandera-de-ecuador-y-esquema-del-pa%C3%ADs-en-un-fondo-blanco-ilustraci-n-vector-148651090.jpg",
  },
  {
    id: 8,
    nombre: "pregunta8",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Bolivia",
    ayuda: "La Paz es su capital",
    imagen:
      "https://static.turbosquid.com/Preview/001301/591/35/_Z.jpg",
  },
  {
    id: 9,
    nombre: "pregunta9",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Paraguay",
    ayuda: "Asunción es su capital",
    imagen:
      "https://ih1.redbubble.net/image.1353986399.2450/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
  },
 {
    id: 10,
    nombre: "pregunta10",
    pregunta: "¿Con que país se asocia este contorno?",
    respuesta: "Venezuela",
    ayuda: "Caracas su capital",
    imagen:
      "https://e7.pngegg.com/pngimages/922/89/png-clipart-flag-of-venezuela-petro-map-map-blue-sticker.png",
  },
];

preguntas.map((listadepreguntas) => {
  crearQuiz(listadepreguntas);
});


//js Fabian -  public -  browser
//response available in function

  fetch('/get-question')
  .then(response => response.json())
  .then(function(question){
      //Obtengo el conteneder
      let contenedor = document.querySelector('.pregunta1');
      question.forEach((question) => {
      });
  });