import { healthStatus } from "../app.js";

test.each([
  [{ name: "Варвар", health: 90 }],
  [{ name: "Волшебница", health: 50 }],
  [{ name: "Разбойник", health: 30 }],
  [{ name: "Друид", health: 15 }],
  [{ name: "Некромант", health: 0 }],
])("should return health status", (unit, status) => {
  expect(healthStatus(unit)).toBe(status);
});
