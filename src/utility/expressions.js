const expresiones = {
  user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telephon: /^[0-9+\-]{7,14}$/, // 7 a 14 numeros y +,- numeracion internacional.
  numberBasic: /^\d{7,14}$/, // 7 a 14 numeros.
  age: /^(?:[7-9]|[1-9][0-9]|100)$/, // 7 a 100 numeros.
};

export default expresiones;
