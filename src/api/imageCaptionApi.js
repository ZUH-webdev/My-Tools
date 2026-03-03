// 🔁 Fake API to generate captions
const captionTemplates = {
  general: [
    "A beautiful moment captured perfectly.",
    "A stunning visual with natural lighting.",
    "A peaceful and aesthetically pleasing scene.",
    "An image that tells a silent story.",
    "A perfectly framed shot with depth."
  ],
  social: [
    "Living in the moment ✨",
    "Just another beautiful day 💫",
    "Moments like these 💭",
    "Creating memories 📸",
    "Vibes speak louder than words"
  ],
  product: [
    "Premium quality with a modern look.",
    "Designed for performance and style.",
    "Built to impress and made to last.",
    "Minimal design, maximum impact.",
    "Crafted for everyday excellence."
  ],
  travel: [
    "Wander where the WiFi is weak 🌍",
    "Exploring the world one step at a time.",
    "Adventure begins where comfort ends.",
    "Lost in the right direction.",
    "Collecting memories, not things."
  ]
};

export const imageCaptionApi = () => {
  const results = [];

  Object.values(captionTemplates).forEach(group => {
    group.forEach(text => {
      for (let i = 1; i <= 20; i++) { // more repetitions for larger pool
        results.push(`${text}`);
      }
    });
  });
  return results;

};