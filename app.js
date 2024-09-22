import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI("clave")

async function classify(msg) {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const result = await model.generateContent(msg)
    const response = result.response
    console.log(response.text());
}

let producto = "Carro"
let prompt = `Analiza este comenatario y con base al producto ${producto}, dime Positivo, si el comentario es positivo, Negativo, si el comentario es negativo, y no aplica si consideras que el comentario no tiene nada que ver con el producto, el comentario es: `
let comenatario = "No me gusto que tuviera tanto pelo en las axilas"

classify(`${prompt} ${comenatario}`)

