const generateId = () => {
  let id = "";
  const length = 15;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }
  return id;
};

module.exports = generateId;
