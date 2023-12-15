const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
