/**importar todas as models aqui */
import "dotenv/config";
import Sequelize from "sequelize";
import databaseConfig from "../config/database";

const models = [
  /**Colocar as MODELS aqui! */
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connetion = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}
export default new Database();
// DB Connetions
