import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const router = express.Router()

const uploadsDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const name = path.basename(file.originalname, ext).replace(/\s+/g, '_')
    cb(null, `${Date.now()}_${name}${ext}`)
  }
})

const upload = multer({ storage })

// POST /api/players - multipart/form-data
router.post('/', upload.single('photo'), (req, res) => {
  const player = req.body
  const file = req.file

  // For now just log and return the received data. Replace with DB logic later.
  console.log('Received player:', player)
  if (file) console.log('Saved file:', file.filename)

  res.status(201).json({ ok: true, player, file: file ? { filename: file.filename, path: `/uploads/${file.filename}` } : null })
})

export default router
