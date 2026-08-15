const express = require('express')

const router = express.Router()

router.post('/initialize', async (req, res) => {
  try {
    const { email, amount } = req.body

    if (!email || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Email and amount are required',
      })
    }

    const numericAmount = Number(amount)

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment amount',
      })
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      console.error('PAYSTACK_SECRET_KEY is missing')

      return res.status(500).json({
        success: false,
        message: 'Paystack configuration is missing',
      })
    }

    const paystackResponse = await fetch(
      'https://api.paystack.co/transaction/initialize',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: Math.round(numericAmount * 100),
          currency: 'NGN',
          callback_url: 'http://localhost:5173/order-success',
        }),
      }
    )

    const data = await paystackResponse.json()

    if (!paystackResponse.ok || !data.status) {
      console.error('Paystack error:', data)

      return res.status(400).json({
        success: false,
        message:
          data.message ||
          'Paystack could not initialize the payment',
      })
    }

    return res.json({
      success: true,
      message: 'Payment initialized successfully',
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference,
    })
  } catch (error) {
    console.error('Payment initialization error:', error)

    return res.status(500).json({
      success: false,
      message: 'Unable to initialize payment',
    })
  }
})

module.exports = router
