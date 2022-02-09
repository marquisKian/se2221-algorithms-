import { faker } from '@faker-js/faker'

const SIZE = 14_000

import * as fs from 'fs'

for (let i = 0; i < SIZE; i++) {
    fs.writeFileSync('data2.txt', faker.company.companyName() + '\n', { flag: 'a'})
}

fs.closeSync()
