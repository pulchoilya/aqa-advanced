import { jest, describe, test, expect, afterEach } from "@jest/globals";

// створюємо контрольовані моки під axios.get / axios.put
const axiosGet = jest.fn();
const axiosPut = jest.fn();

//  важливо: у ESM мок модулів робимо ПЕРЕД імпортом тестованого коду
await jest.unstable_mockModule("axios", () => ({
  default: {
    get: axiosGet,
    put: axiosPut
  }
}));

// тепер, коли axios змоканий, імпортуємо код, який його використовує
const { getUserSettings, updateUserSettings } = await import(
  "../src/http/userSettings.service.js"
);

describe("userSettings.service (моки Axios)", () => {
  afterEach(() => {
    axiosGet.mockReset();
    axiosPut.mockReset();
  });

  test("getUserSettings: успіх (200) — повертає payload", async () => {
    const payload = { status: "ok", data: { currency: "usd", distanceUnits: "km" } };
    axiosGet.mockResolvedValueOnce({ status: 200, data: payload });

    const result = await getUserSettings();

    expect(axiosGet).toHaveBeenCalledWith("/users/settings");
    expect(result).toEqual(payload);
  });

  test("getUserSettings: помилка (401) — прокидує Axios-помилку", async () => {
    const axiosError = Object.assign(new Error("Unauthorized"), {
      isAxiosError: true,
      response: { status: 401, data: { status: "error", message: "Auth required" } }
    });
    axiosGet.mockRejectedValueOnce(axiosError);

    await expect(getUserSettings()).rejects.toBe(axiosError);
    expect(axiosGet).toHaveBeenCalledWith("/users/settings");
  });

  test("updateUserSettings: успіх (200) — відправляє тіло і повертає payload", async () => {
    const body = { currency: "eur", distanceUnits: "km" };
    const payload = { status: "ok", data: body };
    axiosPut.mockResolvedValueOnce({ status: 200, data: payload });

    const result = await updateUserSettings(body);

    expect(axiosPut).toHaveBeenCalledWith("/users/settings", body);
    expect(result).toEqual(payload);
  });

  test("updateUserSettings: помилка (400) — прокидує Axios-помилку", async () => {
    const body = { currency: "usd", distanceUnits: "miles" };
    const axiosError = Object.assign(new Error("Bad Request"), {
      isAxiosError: true,
      response: { status: 400, data: { status: "error", message: "Invalid distanceUnits" } }
    });
    axiosPut.mockRejectedValueOnce(axiosError);

    await expect(updateUserSettings(body)).rejects.toBe(axiosError);
    expect(axiosPut).toHaveBeenCalledWith("/users/settings", body);
  });
});
