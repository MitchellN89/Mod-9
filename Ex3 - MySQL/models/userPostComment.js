const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class UserPostComment extends Model {}
//Sequelize will create this table if it doesn't exist on startup
UserPostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "user_post_comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = UserPostComment;
