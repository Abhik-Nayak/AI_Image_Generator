const express = require('express');
const env = require('dotenv');
const v2 = require('cloudinary');
const router = express.Router();
const Posts = require('../models/posts');
env.config();
