
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://portfolio-updated-chcaihqwn-nihala-ms-projects.vercel.app";

export async function sendPortfolioMessage(message) {
  const response = await fetch(
    `${API_BASE_URL}/api/portfolio/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }
  );

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to get an AI response."
    );
  }

  return data.reply;
}

