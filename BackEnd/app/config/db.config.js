module.exports = {
  HOST: 'localhost',
  USER: 'root', // TODO: Ajoute tes credentials ici la (userame de ta baase de donne)
  PASSWORD: 'root', // TODO: Ajoute tes credentials ici la(password de ta base de donese)
  DB: "genac", // TODO: Tu cree une base de donne avec le noms si
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  }
};
