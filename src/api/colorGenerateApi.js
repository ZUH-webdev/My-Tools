export const fetchAIColors = async (prompt, theme) => {
    const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

    if (!API_KEY) {
        throw new Error("Groq API Key missing!");
    }

    const API_URL = "https://api.groq.com/openai/v1/chat/completions";

    const systemPrompt = `You are a professional UI/UX color designer. Generate a color palette and return ONLY valid JSON (no markdown, no explanation):
{
  "palette": ["#color1", "#color2", "#color3", "#color4", "#color5", "#color6", "#color7", "#color8", "#color9", "#color10", "#color11", "#color12"],
  "main": {
    "primary": {"hex": "#______", "rgba": "rgba(r,g,b,a)"},
    "accent": {"hex": "#______", "rgba": "rgba(r,g,b,a)"},
    "background": {"hex": "#______", "rgba": "rgba(r,g,b,a)"},
    "text": {"hex": "#______", "rgba": "rgba(r,g,b,a)"}
  }
}`;

    const models = [
        "llama-3.3-70b-versatile",     // Newest & best
        "llama-3.1-70b-versatile",     // Backup
        "gemma2-9b-it"                 // Fallback
    ];

    for (const model of models) {
        try {
            console.log(`🔄 Trying model: ${model}`);

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt
                        },
                        {
                            role: "user",
                            content: `Generate colors for prompt: "${prompt}" with theme: "${theme}".`
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 1500,
                    response_format: { type: "json_object" }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.warn(`⚠️ ${model} failed:`, data.error?.message);
                continue;
            }

            let textResponse = data.choices[0].message.content;

            // Clean up response
            textResponse = textResponse
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();

            const parsedData = JSON.parse(textResponse);
            console.log(`✅ Success with ${model}:`, parsedData);
            return parsedData;

        } catch (error) {
            console.warn(`⚠️ ${model} error:`, error.message);
            continue;
        }
    }

    throw new Error("All models failed. Check API key or try again.");
};