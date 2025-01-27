"use strict";

const { v4: uuidv4 } = require("uuid");
const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Role",
      [
        {
          id: uuidv4(),
          name: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          name: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Role", null, {});
  },
};
