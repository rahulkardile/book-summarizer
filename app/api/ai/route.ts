export async function POST(req: any) {
  const { bookTitle, summaryFormat, language } = await req.json();

  const promptTemplate = `
  You are an AI assistant specialized in summarizing books. Using only the book title "${bookTitle}", provide a concise, factual, and accurate summary aimed at a general audience. The summary should draw upon your training knowledge and public domain information about the book. Format the summary in ${summaryFormat} format and in ${language}.
  
  - Tone: Informative, concise, and friendly.
  - Audience: Write the summary in a clear and accessible manner for a general audience (avoid technical jargon or slang).
  - Content: Focus on factual details about the book's plot, themes, and significance. Do not add personal opinions or unverifiable claims.
  - Language: Output the summary in ${language} (English, Hindi, or Marathi, as specified).
  - Summary Format:
    - If ${summaryFormat} is "abstractive", write the summary as a coherent narrative in your own words.
    - If ${summaryFormat} is "extractive", provide key sentences or phrases (if known) from the book that capture its main points.
    - If ${summaryFormat} is "bullet points", present the main ideas as a bullet-point list.
    - If ${summaryFormat} is "chapter-wise", divide the summary into sections by chapter (using headings or labels for each chapter) and summarize each chapter.
    - If ${summaryFormat} combines multiple styles (e.g., "chapter-wise bullet points"), apply each format in the output.
  - **Fallback:** If the book "${bookTitle}" is obscure or not found in your knowledge, clearly state this and provide any general information you can (such as the genre or common themes) without inventing details.
  
  Begin the summary below:
  `;

  const apiKey = process.env.GEMINI_API_KEY;
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptTemplate }] }],
      }),
    });

    const data = await response.json();
    return Response.json({
      result: data.candidates[0].content.parts[0].text,
      type: summaryFormat
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Failed to fetch from Gemini API' }, { status: 500 });
  }
}
