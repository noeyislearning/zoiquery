const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Port and API key
const PORT: number = 8000;
const API_KEY: string = process.env.NEXT_PUBLIC_OPENAI_API_KEY || "";

console.log(API_KEY);