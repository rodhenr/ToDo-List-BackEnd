module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    task_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    task_desc: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return Task;
};
