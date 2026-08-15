const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const pool = require('../db/database')
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
)

const express = require('express')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required',
      })
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters',
      })
    }

    res.status(201).json({
      success: true,
      message: 'Registration endpoint is working',
    })
  } catch (error) {
    console.error('Registration error:', error)

    res.status(500).json({
      success: false,
      message: 'Server error',

router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: 'Google credential is required',
      })
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    const googleId = payload.sub
    const email = payload.email?.toLowerCase()
    const name = payload.name || 'LuxeCart User'

    if (!googleId || !email) {
      return res.status(400).json({
        success: false,
        message: 'Unable to retrieve Google account information',
      })
    }

    let result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )

    let user

    if (result.rows.length === 0) {
      result = await pool.query(
        `INSERT INTO users (name, email, google_id)
         VALUES ($1, $2, $3)
         RETURNING id, name, email, created_at`,
        [name, email, googleId]
      )

      user = result.rows[0]
    } else {
      user = result.rows[0]

      if (!user.google_id) {
        await pool.query(
          'UPDATE users SET google_id = $1 WHERE id = $2',
          [googleId, user.id]
        )
      }
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )

    res.json({
      success: true,
      message: 'Google login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Google login error:', error)

    res.status(401).json({
      success: false,
      message: 'Google authentication failed',
    
    })
  }
})

module.exports = router