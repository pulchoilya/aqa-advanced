import { client } from '../src/http/axiosClient.js';
import { uniqueEmail } from '../src/utils/email.js';
import { baseUser } from '../src/data/user.data.js';
import { defaultSettings } from '../src/data/settings.data.js';
import { signupAndCaptureSid } from '../src/auth/auth.api.js';

describe('User flow: signup → settings GET/PUT (через cookie sid)', () => {
  // збережемо дані користувача між тестами
  const user = { ...baseUser, email: uniqueEmail('flow') };

  test('POST /auth/signup → 201 створює користувача і аутентифікує (ставить sid)', async () => {
    const res = await signupAndCaptureSid(user);

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty('status', 'ok');
    expect(res.data).toHaveProperty('data.userId');
    // сервер одразу задає дефолтні налаштування
    expect(res.data).toHaveProperty('data.distanceUnits');
    expect(res.data).toHaveProperty('data.currency');
  });

  test('GET /users/settings → 200 повертає налаштування (авторизація через sid cookie)', async () => {
    const res = await client.get('/users/settings');

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('status', 'ok');
    expect(res.data).toHaveProperty('data.currency');
    expect(res.data).toHaveProperty('data.distanceUnits');

    // опціонально: якщо хочемо перевіряти конкретні дефолти:
    // expect(res.data.data).toMatchObject({ currency: "usd", distanceUnits: "km" });
  });

  test('PUT /users/settings → 200 оновлює налаштування (авторизація через sid cookie)', async () => {
    // беремо дані з settings.data.js
    const payload = { ...defaultSettings };

    const res = await client.put('/users/settings', payload);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      status: 'ok',
      data: payload,
    });

    // і перевіримо, що GET тепер віддає те саме
    const verify = await client.get('/users/settings');
    expect(verify.status).toBe(200);
    expect(verify.data).toMatchObject({
      status: 'ok',
      data: payload,
    });
  });
});
