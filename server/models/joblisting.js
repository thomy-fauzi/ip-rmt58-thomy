'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobListing.belongsTo(models.Company, { foreignKey: 'CompanyId' });

      // 2. Setiap JobListing bisa memiliki banyak JobApplication
      JobListing.hasMany(models.JobAppliation, { foreignKey: 'JobListingId'});
    }
  }
  JobListing.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title is required'
        },
        notEmpty: {
          msg: 'Title is required'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        notEmpty: {
          msg: 'Description is required'
        }
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Location is required'
        },
        notEmpty: {
          msg: 'Location is required'
        }
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Company is required'
        },
        notEmpty: {
          msg: 'Company is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'JobListing',
  });
  return JobListing;
};