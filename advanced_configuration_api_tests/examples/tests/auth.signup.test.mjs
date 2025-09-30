import { client } from '../src/http/axiosClient.js';
import { uniqueEmail } from '../src/utils/email.js';
import { signupAndCaptureSid } from '../src/auth/auth.api.js';

describe('POST /auth/signup + PUT /users/settings (кука sid)', () => {
  test('201: створює користувача повертає налаштування', async () => {
    const email = uniqueEmail('qa');
    const payload = {
      name: 'John',
      lastName: 'Dou',
      email,
      password: 'Qwerty12345',
      repeatPassword: 'Qwerty12345',
    };

    const res = await client.post('/auth/signup', payload);

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty('status', 'ok');
    expect(res.data).toHaveProperty('data.userId');
    expect(res.data).toHaveProperty('data.distanceUnits');
    expect(res.data).toHaveProperty('data.currency');
  });

  test('400: дубльований email  Bad Request', async () => {
    const sameEmail = uniqueEmail('dup');

    // 1-й запит — реєстрація
    await client.post('/auth/signup', {
      name: 'John',
      lastName: 'Dou',
      email: sameEmail,
      password: 'Qwerty12345',
      repeatPassword: 'Qwerty12345',
    });

    // 2-й — той самий email -> 400
    await expect(
      client.post('/auth/signup', {
        name: 'John',
        lastName: 'Dou',
        email: sameEmail,
        password: 'Qwerty12345',
        repeatPassword: 'Qwerty12345',
      }),
    ).rejects.toMatchObject({ status: 400 });
  });

  test('PUT /users/settings: використовує sid з cookie (200)', async () => {
    //  реєструємо НОВОГО користувача, щоб точно отримати свіжий sid у cookie
    const email = uniqueEmail('withsid');
    await signupAndCaptureSid({
      name: 'John',
      lastName: 'Dou',
      email,
      password: 'Qwerty12345',
      repeatPassword: 'Qwerty12345',
    });

    // тепер у нас є sid, інтерсептор автоматично додасть Cookie: sid=...
    const body = { currency: 'usd', distanceUnits: 'km' };
    const res = await client.put('/users/settings', body);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({
      status: 'ok',
      data: body,
    });
  });
});
