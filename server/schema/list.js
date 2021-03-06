/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    // id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true
    // },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'list'
  });
};
