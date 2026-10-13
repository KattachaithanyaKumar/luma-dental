export type JourneyStep = {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
};

export const patientJourney = {
  label: "Your first visit",
  heading: "What to expect on your first visit.",
  description:
    "Three clear steps, explained in plain language, so there are no surprises from the moment you get in touch.",
  steps: [
    {
      id: "book",
      number: "01",
      title: "Book a consultation",
      summary:
        "Request an appointment online or by phone and choose a time that suits you.",
      details:
        "Tell us what has been on your mind. We match you with the right clinician, find a time that fits your week and ask a few simple questions in advance so we can prepare for your visit.",
    },
    {
      id: "assess",
      number: "02",
      title: "Discuss your concerns and assessment",
      summary:
        "A careful examination and a conversation about what it means for you.",
      details:
        "During your appointment we examine, listen and explain — using imaging where it helps you see what we see. You leave understanding where things stand before any decision is made.",
    },
    {
      id: "plan",
      number: "03",
      title: "Review your personalised care plan",
      summary:
        "A written plan, clear costs and the freedom to take your time.",
      details:
        "You receive a written plan with next steps and estimated costs, plus time to ask anything. Follow-up care is scheduled around your priorities, never ours.",
    },
  ] satisfies JourneyStep[],
} as const;
