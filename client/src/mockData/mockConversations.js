export const mockConversations = [
  {
    id: 1,
    lastInput: "I need help ordering food at the restaurant",
    timestamp: new Date('2025-10-04T10:30:00'),
    language: 'en'
  },
  {
    id: 2,
    lastInput: "How do I ask where the bathroom is in Spanish",
    timestamp: new Date('2025-10-04T09:15:00'),
    language: 'en'
  },
  {
    id: 3,
    lastInput: "Can you help me communicate with my doctor about my symptoms",
    timestamp: new Date('2025-10-03T14:20:00'),
    language: 'en'
  },
  {
    id: 4,
    lastInput: "I want to tell the cashier I need change for a twenty dollar bill",
    timestamp: new Date('2025-10-03T11:45:00'),
    language: 'en'
  },
  {
    id: 5,
    lastInput: "Help me say I'm allergic to peanuts and shellfish",
    timestamp: new Date('2025-10-02T16:30:00'),
    language: 'en'
  },
  {
    id: 6,
    lastInput: "What's the best way to ask for directions to the nearest subway station",
    timestamp: new Date('2025-10-02T13:10:00'),
    language: 'en'
  },
  {
    id: 7,
    lastInput: "I need to schedule an appointment with my physical therapist for next Tuesday at 3pm",
    timestamp: new Date('2025-10-01T15:50:00'),
    language: 'en'
  },
  {
    id: 8,
    lastInput: "Emergency - I need to call 911",
    timestamp: new Date('2025-10-01T08:25:00'),
    language: 'en'
  },
  {
    id: 9,
    lastInput: "How do I politely decline an invitation to a party because I'm not comfortable in loud environments",
    timestamp: new Date('2025-09-30T19:40:00'),
    language: 'en'
  },
  {
    id: 10,
    lastInput: "Translate 'I don't speak French very well, can we communicate another way' into French",
    timestamp: new Date('2025-09-30T12:05:00'),
    language: 'en'
  },
  {
    id: 11,
    lastInput: "Help me explain to my teacher that I need extra time for verbal presentations because of my speech impairment",
    timestamp: new Date('2025-09-29T10:15:00'),
    language: 'en'
  },
  {
    id: 12,
    lastInput: "Quick",
    timestamp: new Date('2025-09-29T09:00:00'),
    language: 'en'
  },
  {
    id: 13,
    lastInput: "I need assistance communicating during a job interview - how can I explain my communication needs professionally",
    timestamp: new Date('2025-09-28T14:30:00'),
    language: 'en'
  },
  {
    id: 14,
    lastInput: "Help me order a medium pepperoni pizza with extra cheese for delivery to 123 Main Street apartment 4B",
    timestamp: new Date('2025-09-28T18:45:00'),
    language: 'en'
  },
  {
    id: 15,
    lastInput: "Can you help me write a text message to my friend explaining why I prefer texting over phone calls",
    timestamp: new Date('2025-09-27T20:20:00'),
    language: 'en'
  }
];

// Example truncator function
function truncateConversationTitle(text, maxLength = 50) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + '...';
}

// Usage example
mockConversations.forEach(conv => {
  console.log(`${conv.id}: ${truncateConversationTitle(conv.lastInput)}`);
});