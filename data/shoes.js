const generateId = require("../util/generateId");

const products = [
  {
    id: generateId(),
    name: "Fanbyn Bar Stool",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/furniture/fanbyn-bar-stool-with-backrest__1.webp",
        color: "#E9E9E9",
      },
      {
        id: "1",
        source: "/furniture/fanbyn-bar-stool-with-backrest__2.webp",
        color: "#5E605F",
      },
    ],
  },
  {
    id: generateId(),
    name: "Ikea Armchair",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/furniture/ikea-ps-2012-armchair__1.webp",
      },
    ],
  },
  {
    id: generateId(),
    name: "Janinge Chair",
    price: 149.99,
    description:
      "Commodo incididunt quis occaecat cupidatat Lorem non culpa voluptate eu commodo amet. Occaecat nulla et enim anim consequat nisi aliquip dolor laborum et dolor nostrud consectetur aute.",
    images: [
      {
        id: "0",
        source: "/furniture/janinge-chair__1.webp",
        color: "#EAC91C",
      },
      {
        id: "1",
        source: "/furniture/janinge-chair__2.webp",
        color: "#C8C9C4",
      },
    ],
  },
  {
    id: generateId(),
    name: "Janinge Bar Stool",
    price: 149.99,
    description:
      "Commodo occaecat qui eiusmod aliquip est velit officia voluptate aute eiusmod tempor ad ex. Irure excepteur cupidatat ut eu adipisicing eu irure enim cillum consectetur.",
    images: [
      {
        id: "0",
        source: "/furniture/janinge-bar-stool__1.webp",
        color: "#8C8C8C",
      },
      {
        id: "1",
        source: "/furniture/janinge-bar-stool__2.webp",
        color: "#E9EAE5",
      },
    ],
  },
  {
    id: generateId(),
    name: "Leifarne Armchair",
    price: 299.99,
    description:
      "Laboris adipisicing sint reprehenderit cupidatat velit veniam aliquip do incididunt minim proident. Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/leifarne-armchair__1.webp",
        color: "#CD9929",
      },
      {
        id: "1",
        source: "/furniture/leifarne-armchair__2.webp",
        color: "#DBDCD3",
      },
      {
        id: "2",
        source: "/furniture/leifarne-armchair__3.webp",
        color: "#B99C6F",
      },
    ],
  },
  {
    id: generateId(),
    name: "Adde chair",
    price: 99.99,
    description:
      "Sint ea sit proident Lorem id est amet amet occaecat eiusmod. Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/adde-chair__1.webp",
        color: "#3B3C39",
      },
      {
        id: "1",
        source: "/furniture/adde-chair__2.webp",
        color: "#85898C",
      },
      {
        id: "2",
        source: "/furniture/adde-chair__3.webp",
        color: "#EDEBE7",
      },
    ],
  },
  {
    id: generateId(),
    name: "Terje Folding Chair",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/terje-folding-chair__1.webp",
        color: "#262626",
      },
      {
        id: "1",
        source: "/furniture/terje-folding-chair__2.webp",
        color: "#CF9F76",
      },
      {
        id: "2",
        source: "/furniture/terje-folding-chair__3.webp",
        color: "#DADBD6",
      },
      {
        id: "3",
        source: "/furniture/terje-folding-chair__4.webp",
        color: "#262626",
      },
    ],
  },
  {
    id: generateId(),
    name: "Volfgang Chair",
    price: 89.99,
    description:
      "Consequat minim nostrud aliqua cupidatat ullamco sit eu nisi aliquip aliquip aute. Minim sunt occaecat enim labore veniam incididunt aliquip adipisicing in eiusmod amet adipisicing.",
    images: [
      {
        id: "0",
        source: "/furniture/volfgang-chair__1.webp",
        color: "#B6B4B3",
      },
      {
        id: "1",
        source: "/furniture/volfgang-chair__2.webp",
        color: "#646466",
      },
      {
        id: "2",
        source: "/furniture/volfgang-chair__3.webp",
        color: "#CEC7BE",
      },
      {
        id: "3",
        source: "/furniture/volfgang-chair__4.webp",
        color: "#433F3E",
      },
    ],
  },
  {
    id: generateId(),
    name: "Roenninge Chair Birch",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/roenninge-chair-birch__1.webp",
        color: "#E2C39E",
      },
      {
        id: "1",
        source: "/furniture/roenninge-chair-birch__2.webp",
        color: "#60735F",
      },
      {
        id: "2",
        source: "/furniture/roenninge-chair-birch__3.webp",
        color: "#2A2A28",
      },
    ],
  },
];

const recommendedProducts = [
  {
    id: generateId(),
    name: "Sofa",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/sofa-1.png",
        color: "#202646",
      },
      {
        id: "1",
        source: "/furniture/sofa-2.png",
        color: "#918881",
      },
      {
        id: "2",
        source: "/furniture/sofa-3.png",
        color: "#B6B6B6",
      },
    ],
  },
  {
    id: generateId(),
    name: "Sofa",
    price: 199.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/furniture/conf_sofa__1.png",
        color: "#88B0B1",
      },
      {
        id: "1",
        source: "/furniture/conf_sofa__2.png",
        color: "#726F72",
      },
      {
        id: "2",
        source: "/furniture/conf_sofa__3.png",
        color: "#C6C2B7",
      },
    ],
  },
];

module.exports = { products, recommendedProducts };
