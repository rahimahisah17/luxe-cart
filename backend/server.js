const express = require('express')
const cors = require('cors')
require('dotenv').config()

const pool = require('./db/database')
const authRoutes = require('./routes/auth')
const paymentRoutes = require('./routes/payment')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/payment', paymentRoutes)

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')

    res.json({
      success: true,
      message: 'LuxeCart backend is running',
      database: 'connected',
      time: result.rows[0].now,
    })
  } catch (error) {
    console.error('Database connection error:', error)

    res.status(500).json({
      success: false,
      message: 'Database connection failed',
    })
  }
})

app.listen(PORT, () => {
  console.log(`LuxeCart backend running on port ${PORT}`)
})

