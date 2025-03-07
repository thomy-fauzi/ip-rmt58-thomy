'use strict';
const fs = require("fs");
const { hashPassword } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Users", [
      {
        name: "User 1",
        email: "user1@mail.com",
        password: hashPassword("12345"),
        role: "aplicant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tech Indo",
        email: "contact@techindo.com",
        password: hashPassword("12345"),
        role: "company",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "App Digi",
        email: "contact@digital.com",
        password: hashPassword("12345"),
        role: "company",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    const companies = JSON.parse(fs.readFileSync("./data/company.json", "utf-8"))
    const data = companies.map((company) => {
        return {
          ...company,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
    });
    await queryInterface.bulkInsert("Companies", data, {});

    const jobList = JSON.parse(fs.readFileSync("./data/lowongan.json", "utf-8"))
    const jobData = jobList.map((job) => {
        return {
          ...job,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
    });
    await queryInterface.bulkInsert("JobListings", jobData, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Companies", null, {});
    await queryInterface.bulkDelete("JobListings", null, {});
  }
};
