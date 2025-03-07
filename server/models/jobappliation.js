'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobAppliation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobAppliation.belongsTo(models.User, { foreignKey: 'UserId'});

      JobAppliation.belongsTo(models.JobListing, { foreignKey: 'JobListingId'});
    }
  }
  JobAppliation.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required'
        },
        notEmpty: {
          msg: 'User ID is required'
        }
      }
    },
    JobListingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Job is required'
        },
        notEmpty: {
          msg: 'Job is required'
        }
      }
    },
    coverLetter: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Cover Letter is required'
        },
        notEmpty: {
          msg: 'Cover Letter is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'JobAppliation',
  });
  return JobAppliation;
};