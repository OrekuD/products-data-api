const products = [
  {
    id: Math.random().toString(),
    name: "Fanbyn Bar Stool",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/fanbyn-bar-stool-with-backrest__1.webp",
        color: "#E9E9E9",
      },
      {
        id: "1",
        source: "/fanbyn-bar-stool-with-backrest__2.webp",
        color: "#5E605F",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Ikea Armchair",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/ikea-ps-2012-armchair__1.webp",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Janinge Chair",
    price: 149.99,
    description:
      "Commodo incididunt quis occaecat cupidatat Lorem non culpa voluptate eu commodo amet. Occaecat nulla et enim anim consequat nisi aliquip dolor laborum et dolor nostrud consectetur aute.",
    images: [
      {
        id: "0",
        source: "/janinge-chair__1.webp",
        color: "#EAC91C",
      },
      {
        id: "1",
        source: "/janinge-chair__2.webp",
        color: "#C8C9C4",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Janinge Bar Stool",
    price: 149.99,
    description:
      "Commodo occaecat qui eiusmod aliquip est velit officia voluptate aute eiusmod tempor ad ex. Irure excepteur cupidatat ut eu adipisicing eu irure enim cillum consectetur.",
    images: [
      {
        id: "0",
        source: "/janinge-bar-stool__1.webp",
        color: "#8C8C8C",
      },
      {
        id: "1",
        source: "/janinge-bar-stool__2.webp",
        color: "#E9EAE5",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Leifarne Armchair",
    price: 299.99,
    description:
      "Laboris adipisicing sint reprehenderit cupidatat velit veniam aliquip do incididunt minim proident. Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/leifarne-armchair__1.webp",
        color: "#CD9929",
      },
      {
        id: "1",
        source: "/leifarne-armchair__2.webp",
        color: "#DBDCD3",
      },
      {
        id: "2",
        source: "/leifarne-armchair__3.webp",
        color: "#B99C6F",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Adde chair",
    price: 99.99,
    description:
      "Sint ea sit proident Lorem id est amet amet occaecat eiusmod. Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/adde-chair__1.webp",
        color: "#3B3C39",
      },
      {
        id: "1",
        source: "/adde-chair__2.webp",
        color: "#85898C",
      },
      {
        id: "2",
        source: "/adde-chair__3.webp",
        color: "#EDEBE7",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Terje Folding Chair",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/terje-folding-chair__1.webp",
        color: "#262626",
      },
      {
        id: "1",
        source: "/terje-folding-chair__2.webp",
        color: "#CF9F76",
      },
      {
        id: "2",
        source: "/terje-folding-chair__3.webp",
        color: "#DADBD6",
      },
      {
        id: "3",
        source: "/terje-folding-chair__4.webp",
        color: "#262626",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Volfgang Chair",
    price: 89.99,
    description:
      "Consequat minim nostrud aliqua cupidatat ullamco sit eu nisi aliquip aliquip aute. Minim sunt occaecat enim labore veniam incididunt aliquip adipisicing in eiusmod amet adipisicing.",
    images: [
      {
        id: "0",
        source: "/volfgang-chair__1.webp",
        color: "#B6B4B3",
      },
      {
        id: "1",
        source: "/volfgang-chair__2.webp",
        color: "#646466",
      },
      {
        id: "2",
        source: "/volfgang-chair__3.webp",
        color: "#CEC7BE",
      },
      {
        id: "3",
        source: "/volfgang-chair__4.webp",
        color: "#433F3E",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Roenninge Chair Birch",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/roenninge-chair-birch__1.webp",
        color: "#E2C39E",
      },
      {
        id: "1",
        source: "/roenninge-chair-birch__2.webp",
        color: "#60735F",
      },
      {
        id: "2",
        source: "/roenninge-chair-birch__3.webp",
        color: "#2A2A28",
      },
    ],
  },
];

const recommendedProducts = [
  {
    id: Math.random().toString(),
    name: "Sofa",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/sofa-1.png",
        color: "#202646",
      },
      {
        id: "1",
        source: "/sofa-2.png",
        color: "#918881",
      },
      {
        id: "2",
        source: "/sofa-3.png",
        color: "#B6B6B6",
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: "Sofa",
    price: 199.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/conf_sofa__1.png",
        color: "#88B0B1",
      },
      {
        id: "1",
        source: "/conf_sofa__2.png",
        color: "#726F72",
      },
      {
        id: "2",
        source: "/conf_sofa__3.png",
        color: "#C6C2B7",
      },
    ],
  },
];

module.exports = { products, recommendedProducts };
