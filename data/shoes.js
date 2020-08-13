const generateId = require("../util/generateId");

const products = [
  {
    id: generateId(),
    name: "Nike Superrep Go",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__1.jpg",
        color: "#96E217",
      },
      {
        id: "1",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__2.jpg",
        color: "#96E217",
      },
      {
        id: "2",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__4.jpg",
        color: "#96E217",
      },
      {
        id: "3",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__4.jpg",
        color: "#96E217",
      },
      {
        id: "4",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__5.jpg",
        color: "#96E217",
      },
      {
        id: "5",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__6.jpg",
        color: "#96E217",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike React Metcon",
    price: 249.99,
    description:
      "Do ea est sint sint laboris eu officia veniam. Cupidatat amet fugiat incididunt occaecat sint eiusmod anim.",
    images: [
      {
        id: "0",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__1.jpg",
        color: "#0A5483",
      },
      {
        id: "1",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__2.jpg",
        color: "#0A5483",
      },
      {
        id: "2",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__3.jpg",
        color: "#0A5483",
      },
      {
        id: "3",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__4.jpg",
        color: "#0A5483",
      },
      {
        id: "4",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__5.jpg",
        color: "#0A5483",
      },
      {
        id: "5",
        source: "/shoes/react-metcon-mens-training-shoe-1G703V__6.jpg",
        color: "#0A5483",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike Air Vapormax 360",
    price: 149.99,
    description:
      "Commodo incididunt quis occaecat cupidatat Lorem non culpa voluptate eu commodo amet. Occaecat nulla et enim anim consequat nisi aliquip dolor laborum et dolor nostrud consectetur aute.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__1.jpg",
        color: "#4C6069",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__1.jpg",
        color: "#4C6069",
      },
      {
        id: "2",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__3.jpg",
        color: "#4C6069",
      },
      {
        id: "3",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__3.jpg",
        color: "#4C6069",
      },
      {
        id: "4",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__6.jpg",
        color: "#4C6069",
      },
      {
        id: "5",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__6.jpg",
        color: "#4C6069",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike Air Vapormax 2020",
    price: 149.99,
    description:
      "Commodo occaecat qui eiusmod aliquip est velit officia voluptate aute eiusmod tempor ad ex. Irure excepteur cupidatat ut eu adipisicing eu irure enim cillum consectetur.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__1.jpg",
        color: "#2E2F39",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__1.jpg",
        color: "#2E2F39",
      },
      {
        id: "2",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__3.jpg",
        color: "#2E2F39",
      },
      {
        id: "3",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__4.jpg",
        color: "#2E2F39",
      },
      {
        id: "4",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__6.jpg",
        color: "#2E2F39",
      },
      {
        id: "5",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__6.jpg",
        color: "#2E2F39",
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
        source: "/shoes/leifarne-armchair__1.jpg",
        color: "#CD9929",
      },
      {
        id: "1",
        source: "/shoes/leifarne-armchair__2.jpg",
        color: "#DBDCD3",
      },
      {
        id: "2",
        source: "/shoes/leifarne-armchair__3.jpg",
        color: "#B99C6F",
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
        source: "/shoes/volfgang-chair__1.jpg",
        color: "#B6B4B3",
      },
      {
        id: "1",
        source: "/shoes/volfgang-chair__2.jpg",
        color: "#646466",
      },
      {
        id: "2",
        source: "/shoes/volfgang-chair__3.jpg",
        color: "#CEC7BE",
      },
      {
        id: "3",
        source: "/shoes/volfgang-chair__4.jpg",
        color: "#433F3E",
      },
    ],
  },
  {
    id: generateId(),
    name: "Air Vapormax Plus Womens",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__1.jpg",
        color: "#C96C85",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__2.jpg",
        color: "#C96C85",
      },
      {
        id: "2",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__3.jpg",
        color: "#C96C85",
      },
      {
        id: "3",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__1.jpg",
        color: "#C96C85",
      },
      {
        id: "4",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__2.jpg",
        color: "#C96C85",
      },
      {
        id: "5",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__3.jpg",
        color: "#C96C85",
      },
    ],
  },
];

const recommendedProducts = [
  {
    id: generateId(),
    name: "React Infinity Run Flyknit",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__1.jpg",
        color: "#DADBDF",
      },
      {
        id: "1",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__2.jpg",
        color: "#DADBDF",
      },
      {
        id: "2",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__3.jpg",
        color: "#DADBDF",
      },
      {
        id: "3",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__4.jpg",
        color: "#DADBDF",
      },
      {
        id: "4",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__5.jpg",
        color: "#DADBDF",
      },
      {
        id: "5",
        source:
          "/shoes/react-infinity-run-flyknit-mens-running-shoe-zX42Nc__6.jpg",
        color: "#DADBDF",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike Metcon 6",
    price: 299.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/shoes/custom-nike-metcon-6-by-you__1.jpg",
        color: "#45297E",
      },
      {
        id: "1",
        source: "/shoes/custom-nike-metcon-6-by-you__2.jpg",
        color: "#45297E",
      },
      {
        id: "2",
        source: "/shoes/custom-nike-metcon-6-by-you__3.jpg",
        color: "#45297E",
      },
      {
        id: "3",
        source: "/shoes/custom-nike-metcon-6-by-you__4.jpg",
        color: "#45297E",
      },
      {
        id: "4",
        source: "/shoes/custom-nike-metcon-6-by-you__5.jpg",
        color: "#45297E",
      },
      {
        id: "5",
        source: "/shoes/custom-nike-metcon-6-by-you__6.jpg",
        color: "#45297E",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike Supperrep Go",
    price: 199.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__1.jpg",
        color: "#AEEA41",
      },
      {
        id: "1",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__2.jpg",
        color: "#AEEA41",
      },
      {
        id: "2",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__4.jpg",
        color: "#AEEA41",
      },
      {
        id: "3",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__4.jpg",
        color: "#AEEA41",
      },
      {
        id: "4",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__5.jpg",
        color: "#AEEA41",
      },
      {
        id: "5",
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__6.jpg",
        color: "#AEEA41",
      },
    ],
  },
  {
    id: generateId(),
    name: "Jordan Zoom Trunner",
    price: 199.99,
    description:
      "Elit tempor eiusmod reprehenderit mollit nostrud duis qui irure officia consequat tempor eiusmod.",
    images: [
      {
        id: "0",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__1.jpg",
        color: "#93E190",
      },
      {
        id: "1",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__2.jpg",
        color: "#93E190",
      },
      {
        id: "2",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__4.jpg",
        color: "#93E190",
      },
      {
        id: "3",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__4.jpg",
        color: "#93E190",
      },
      {
        id: "4",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__5.jpg",
        color: "#93E190",
      },
      {
        id: "5",
        source:
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__6.jpg",
        color: "#93E190",
      },
    ],
  },
];

module.exports = { products, recommendedProducts };
