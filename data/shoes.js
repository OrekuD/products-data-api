const generateId = require("../util/generateId");

const products = [
  {
    id: generateId(),
    name: "Air Edge 270",
    price: 89.99,
    description:
      "The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens. Featuring Nike's biggest heel Air unit yet, it delivers total comfort and versatile style.",
    images: [
      {
        id: "0",
        source: "/shoes/air-edge-270-mens-shoe-fRCSW5__1.jpg",
        color: "#4781C3",
      },
      {
        id: "1",
        source: "/shoes/air-edge-270-mens-shoe-fRCSW5__2.jpg",
        color: "#4781C3",
      },
      {
        id: "2",
        source: "",
        color: "#4781C3",
      },
      {
        id: "3",
        source: "",
        color: "#4781C3",
      },
      {
        id: "4",
        source: "/shoes/air-edge-270-mens-shoe-fRCSW5__5.jpg",
        color: "#4781C3",
      },
      {
        id: "5",
        source: "/shoes/air-edge-270-mens-shoe-fRCSW5__6.jpg",
        color: "#4781C3",
      },
    ],
  },
  {
    id: generateId(),
    name: "Nike Superrep Go",
    price: 249.99,
    description:
      "The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
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
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__3.jpg",
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
      "The Nike React Metcon takes the stability and traction from the training original and pairs it with Nike's most comfortable cushioning. Tackle high-impact and lifting workouts with a light, breathable upper and durable grip to keep you going.",
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
      "Inspired by heritage running shoes like the 2006 Air Max 360, the Nike Air Vapormax 360 reimagines full-length Air with its lighter, more flexible design. The full-length foam midsole adds to the comfort while bold colors create a fresh, modern look.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__1.jpg",
        color: "#4C6069",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__2.jpg",
        color: "#4C6069",
      },
      {
        id: "2",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__3.jpg",
        color: "#4C6069",
      },
      {
        id: "3",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__4.jpg",
        color: "#4C6069",
      },
      {
        id: "4",
        source: "/shoes/air-vapormax-360-mens-shoe-b09bdB__5.jpg",
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
      "Designed with sustainability in mind, the Nike Air VaporMax 2020 Flyknit is made from at least 50% recycled content by weight. That’s a lot of trash! As part of Nike’s journey towards lowering our impact, we’re discovering new ways to put our waste to good use. By utilizing leftover materials, recycled polyester, recycled foam, and a Nike Air sole made from at least 75% recycled TPU, the VaporMax 2020 Flyknit marks the next step towards our ultimate goal of zero carbon and zero waste.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__1.jpg",
        color: "#2E2F39",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__2.jpg",
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
        source: "/shoes/air-vapormax-2020-fk-mens-shoe-mZ0Fz6__5.jpg",
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
    name: "Air Vapormax Plus Womens",
    price: 299.99,
    description:
      "The Nike Air VaporMax Plus looks to the past and propels you into the future. Nodding to the '98 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up the comfort.",
    images: [
      {
        id: "0",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__1.jpg",
        color: "#F2B8DF",
      },
      {
        id: "1",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__2.jpg",
        color: "#F2B8DF",
      },
      {
        id: "2",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__3.jpg",
        color: "#F2B8DF",
      },
      {
        id: "3",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__4.jpg",
        color: "#F2B8DF",
      },
      {
        id: "4",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__5.jpg",
        color: "#F2B8DF",
      },
      {
        id: "5",
        source: "/shoes/air-vapormax-plus-womens-shoe-xbt7zf__6.jpg",
        color: "#F2B8DF",
      },
    ],
  },
];

const recommendedProducts = [
  {
    id: generateId(),
    name: "Air Force 1 Shadow - Womens",
    price: 199.99,
    description:
      "The Nike Air Force 1 Shadow pays homage to the women who are setting an example for the next generation by being forces of change in their community. This sneaker reflects this ethos in its design with double the swoosh, double the height, and double the force.",
    images: [
      {
        id: "0",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__1.jpg",
        color: "#E0EDC1",
      },
      {
        id: "1",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__2.jpg",
        color: "#E0EDC1",
      },
      {
        id: "2",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__3.jpg",
        color: "#E0EDC1",
      },
      {
        id: "3",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__4.jpg",
        color: "#E0EDC1",
      },
      {
        id: "4",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__5.jpg",
        color: "#E0EDC1",
      },
      {
        id: "5",
        source: "/shoes/air-force-1-shadow-womens-shoe-kTgn9J__6.jpg",
        color: "#E0EDC1",
      },
    ],
  },
  {
    id: generateId(),
    name: "React Infinity Run Flyknit",
    price: 299.99,
    description:
      "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
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
      "The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
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
        source: "/shoes/superrep-go-mens-training-shoe-19sK4X__3.jpg",
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
      "The Nike React Metcon takes the stability and traction from the training original and pairs it with Nike's most comfortable cushioning. Tackle high-impact and lifting workouts with a light, breathable upper and durable grip to keep you going.",
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
          "/shoes/jordan-zoom-trunner-ultimate-running-shoe-bW1Dzz__3.jpg",
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
