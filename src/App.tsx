import { globalStyles } from "./styles/globalStyle";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PollListingPage from "./pages/PollListingPage";
import PollDetailPage from "./pages/PollDetailPage";
import { AnswerContext } from "./context/pollAnswerStore";
import { fakeAnswer } from "./data/fakeAnswerData";
import { useState } from "react";
import { FakeAnswer } from "./types/pollSchema";
// import PollDetailPage from "./pages/PollDetailPage"; // Assuming you have a separate page for poll details

function App() {
  globalStyles();
  const [answers, setAnswers] = useState<FakeAnswer[]>(fakeAnswer);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      <Router>
        <Routes>
          <Route path="" element={<PollListingPage />} />
          <Route path="/:id" element={<PollDetailPage />} />
        </Routes>
      </Router>
    </AnswerContext.Provider>
  );
}

export default App;
