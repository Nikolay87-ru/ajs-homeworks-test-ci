import { healthStatus } from "./app.js";

describe("healthStatus", () => {
  test.each([
    [{ name: "Варвар", health: 90 }, "healthy"],
    [{ name: "Маг", health: 51 }, "healthy"],
    [{ name: "Волшебница", health: 50 }, "wounded"],
    [{ name: "Лучник", health: 49 }, "wounded"],
    [{ name: "Разбойник", health: 30 }, "wounded"],
    [{ name: "Друид", health: 15 }, "wounded"],
    [{ name: "Некромант", health: 14 }, "critical"],
    [{ name: "Рыцарь", health: 0 }, "critical"],
  ])("character %p should return %s", (character, expectedStatus) => {
    expect(healthStatus(character)).toBe(expectedStatus);
  });
});
