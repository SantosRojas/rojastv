import { sql } from '@vercel/postgres';
import {
  Channels
} from './definitions';

export async function fetchChannels() {
  try {

    const data = await sql<Channels>`select * from channels;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch channel data.');
  }
}
