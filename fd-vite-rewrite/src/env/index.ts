import {z} from "zod";

const envSchema = z.object({
    VITE_SERVER_BASE_URL: z.string().url(),
});

const parsingResult = envSchema.safeParse(import.meta.env);

if (!parsingResult.success) {
    console.log(import.meta.env);
    console.log(parsingResult.error)
    throw new Error("ENV not set at server");
}

const env = parsingResult.data;

export default env;