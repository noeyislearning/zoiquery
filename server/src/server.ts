import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

/** PORT and API_KEY */
const PORT: number = 8000;
const API_KEY: string = process.env.API_KEY || "";

/** Initialize server */
const app: Application = express();
app.use(cors());
app.use(express.json());

/** Initialize OpenAI API */
const configuration = new Configuration({ apiKey: API_KEY });
const openai = new OpenAIApi(configuration);

/** Routes */
app.post("/completions", async (req: Request, res: Response) => {
  try {
    const chat = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: "Create a SQL request to " + req.body.message,
        }
      ],
    });
    res.send(chat.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send(`SERVER ERROR: ${error}`);
  }
});
