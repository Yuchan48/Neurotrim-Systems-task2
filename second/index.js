let path = anime.path("svg path");

anime({
  targets: "#ball",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
