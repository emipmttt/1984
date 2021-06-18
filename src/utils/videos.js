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
    };

  return videos[id];
};
