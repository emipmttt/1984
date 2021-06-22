export default (id) => {
  const videos = {
    1: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/1.mp4",
      question: "WINSTON DEBERÍA… ",
      options: [
        { text: "ABRIR LA PUERTA", video: "2" },
        { text: "IGNORAR", video: "3" },
      ],
    },
    2: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623955578/1984/2.mp4",
      question: "Ayudar a Ampleforth…",
      options: [
        { text: "Sí", video: "4" },
        { text: "Sí Seguir caminando", video: "5" },
      ],
    },
    3: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/3.mp4",
      question: "Ayudar a Ampleforth…",
      options: [
        { text: "Sí", video: "4" },
        { text: "Seguir caminando", video: "5" },
      ],
    },
    4: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/4.mp4",
      question: "¿Darle la cuchilla a Syme?",
      options: [
        { text: "Sí", video: "6" },
        { text: "No", video: "7" },
      ],
    },
    5: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/5.mp4",
      question: "¿Darle la cuchilla a Syme?",
      options: [
        { text: "Sí", video: "6" },
        { text: "No", video: "7" },
      ],
    },
    6: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/6.mp4",
      question: "¿Comprar coral o libro? ",
      options: [
        { text: "Coral", video: "8" },
        { text: "Libro", video: "9" },
      ],
    },
    7: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/7.mp4",
      question: "¿Comprar coral o libro? ",
      options: [
        { text: "Coral", video: "8" },
        { text: "Libro", video: "9" },
      ],
    },
    8: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/8.mp4",
      question: "WINSTON DEBERÍA…",
      options: [
        { text: "Abrir el papel", video: "10" },
        { text: "Deshacerse de él", video: "11" },
      ],
    },
    9: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/9.mp4",
      question: "FINAL ALTERNATIVO 1",
      options: [{ text: "Regresar", video: "0" }],
    },
    10: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/10.mp4",
      question: "Winston debería responder…",
      options: [
        { text: "Sí", video: "12" },
        { text: "No", video: "13" },
      ],
    },
    11: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/11.mp4",
      question: "Winston debería responder…",
      options: [
        { text: "Sí", video: "12" },
        { text: "No", video: "13" },
      ],
    },
    12: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/12.mp4",
      question: "Winston Debería…",
      options: [
        { text: "Aceptar", video: "14" },
        { text: "Guardar Silencio", video: "15" },
      ],
    },
    13: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/13.mp4",
      question: "Winston Debería…",
      options: [
        { text: "Aceptar", video: "14" },
        { text: "Guardar Silencio", video: "15" },
      ],
    },
    14: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/14.mp4",
      question: "El guardia debería…",
      options: [
        { text: "Llevarse a Winston", video: "16" },
        { text: "Llevarse a Parsons", video: "17" },
      ],
    },
    15: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/15.mp4",
      question: "FINAL ALTERNATIVO 2",
      options: [{ text: "Regresar", video: "0" }],
    },
    16: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/16.mp4",
      question: "FINAL ALTERNATIVO 3",
      options: [{ text: "Regresar", video: "0" }],
    },
    17: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/17.mp4",
      question: "Tortura a Winston…",
      options: [
        { text: "Estirarlo", video: "18" },
        { text: "Electroshock", video: "19" },
        { text: "Quitarle los dientes", video: "20" },
      ],
    },
    18: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/18.mp4",
      question: "¿Dispararle a Winston?...",
      options: [{ text: "Sí", video: "21" }],
    },
    19: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/19.mp4",
      question: "¿Dispararle a Winston?...",
      options: [{ text: "Sí", video: "21" }],
    },
    20: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/20.mp4",
      question: "¿Dispararle a Winston?...",
      options: [{ text: "Sí", video: "21" }],
    },
    21: {
      src:
        "https://res.cloudinary.com/emipmt/video/upload/v1623952213/1984/21.mp4",
      question: "FINAL DEFINITIVO",
      options: [{ text: "Regresar", video: "0" }],
    },
  };

  return videos[id];
};
