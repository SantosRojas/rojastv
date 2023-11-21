const { db } = require('@vercel/postgres');
const {
  Canales
} = require('../app/lib/channels.js');
const bcrypt = require('bcrypt');

async function seedChannels(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS channels (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        category VARCHAR(50) NOT NULL,
        url VARCHAR(255) NOT NULL,
        url_image VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "channels" table`);

    // Insert data into the "users" table
    const channelsInsert = await Promise.all(
      Canales.map(async (canal) => {
        return client.sql`
        INSERT INTO channels (name,category,url,url_image)
        VALUES (${canal.name}, ${canal.category}, ${canal.url}, ${canal.url_image});
      `;
      }),
    );

    console.log(`Seeded ${Canales.length} users`);

    return {
      createTable:createTable,
      channels: channelsInsert,
    };
  } catch (error) {
    console.error('Error seeding channels:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  await seedChannels(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
