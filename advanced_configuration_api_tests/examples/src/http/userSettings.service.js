import axios from "axios";

/**
 * Забирає налаштування користувача
 * Повертає лише "payload" (res.data), без status/headers.
 */
export async function getUserSettings() {
  const res = await axios.get("/users/settings");
  return res.data; // очікуємо { status: "ok", data: { currency, distanceUnits } }
}

/**
 * Оновлює налаштування користувача
 * @param {{currency: string, distanceUnits: string}} data
 */
export async function updateUserSettings(data) {
  const res = await axios.put("/users/settings", data);
  return res.data; // очікуємо { status: "ok", data: { ... } }
}
