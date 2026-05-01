type AnalyzeResponse = {
  score: number;
  analysis: string[];
  improvements: string[];
  hook: string;
};

const API_URL = "https://YOUR_DEPLOYED_URL/api/analyze";

const form = document.getElementById("analyze-form") as HTMLFormElement;
const input = document.getElementById("idea") as HTMLTextAreaElement;
const button = document.getElementById("analyze-btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLElement;
const errorText = document.getElementById("error") as HTMLElement;
const scoreEl = document.getElementById("score") as HTMLElement;
const hookEl = document.getElementById("hook") as HTMLElement;
const feedbackEl = document.getElementById("feedback") as HTMLElement;

function setLoading(isLoading: boolean): void {
  button.disabled = isLoading;
  button.textContent = isLoading ? "Analyzing..." : "Analyze";
}

function renderResult(data: AnalyzeResponse): void {
  scoreEl.textContent = String(data.score);
  hookEl.textContent = data.hook;
  feedbackEl.textContent = data.analysis[0] ?? "No feedback returned.";

  errorText.classList.add("hidden");
  result.classList.remove("hidden");
}

function renderError(message: string): void {
  errorText.textContent = message;
  errorText.classList.remove("hidden");
}

async function onSubmit(event: SubmitEvent): Promise<void> {
  event.preventDefault();
  const idea = input.value.trim();

  if (idea.length < 10) {
    renderError("Please enter at least 10 characters.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea, audience: "General", format: "short" })
    });

    if (!response.ok) throw new Error("Analysis service unavailable.");

    const data = (await response.json()) as AnalyzeResponse;
    renderResult(data);
  } catch {
    renderError("Could not analyze now. Please try again.");
  } finally {
    setLoading(false);
  }
}

form.addEventListener("submit", onSubmit);
