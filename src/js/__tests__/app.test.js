import { healthStatus, sortingListOfHeroes, getLevel } from "../app.js";
import fetchData from "../http.js";

jest.mock("../http");

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

describe("sortingListOfHeroes", () => {
  test("should sorting list of heroes by health", () => {
    const heroes = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];

    const expectedList = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];

    const result = sortingListOfHeroes(heroes);

    expect(result).toEqual(expectedList);
  });
});

describe("getLevel", () => {
  beforeEach(() => {
    fetchData.mockClear();
  });

  test("should return level when status is ok", () => {
    fetchData.mockReturnValue({
      status: "ok",
      level: 1,
    });

    const result = getLevel(1);
    expect(result).toBe("Ваш текущий уровень: 1");
    expect(fetchData).toHaveBeenCalledWith("https://server/user/1");
  });

  test("should return message when status is not ok", () => {
    fetchData.mockReturnValueOnce({
      status: "error",
      level: 2,
    });

    const result = getLevel(2);
    expect(result).toBe("Информация об уровне временно недоступна");
  });
});
