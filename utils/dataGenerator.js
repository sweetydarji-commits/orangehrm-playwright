import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    username: faker.internet.username(),
    password: 'Password@123',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  };
}