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
  };

  return videos[id];
};
