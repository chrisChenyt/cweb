/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,// 字段类型
      allowNull: false,// 是否允许为NULL
      autoIncrement: true,
      primaryKey: true// 主键
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: true
    },
    user_name: {
      type: DataTypes.CHAR(50),// 最大长度为50的字符串
      allowNull: true
    }
  }, {
    tableName: 'user'// 表名
  });
};
