// "базовий" користувач
import { faker } from '@faker-js/faker';
export const baseUser = {
  name: faker.person.firstName(),          // випадкове ім’я
  lastName: faker.person.lastName(),       // випадкове прізвище
  password: 'Qwerty12345',
  repeatPassword: 'Qwerty12345',
};



