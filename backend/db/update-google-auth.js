require('dotenv').config()

const pool = require('./database')

async function updateDatabase() {
  try {
    await pool.query(`
      ALTER TABLE users
      ALTER COLUMN password_hash DROP NOT NULL
    `)

    await pool.query(`
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS google_id TEXT UNIQUE
    `)

    console.log('Google authentication database update completed successfully.')
  } catch (error) {
    console.error('Database update failed:', error)
  } finally {
    await pool.end()
  }
}

updateDatabase()