const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainingCenter = sequelize.define('TrainingCenter', {
  centerName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 40]
    }
  },
  centerCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true,
      len: [12, 12]
    }
  },
  address: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  studentCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  coursesOffered: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  contactEmail: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  contactPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^\+?[0-9]{1,}$/ // Phone number validation
    }
  }
});

module.exports = TrainingCenter;
