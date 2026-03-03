const CATEGORY_LABELS = {
  "social-media": "Social Media Tools",
  "text-tools": "Text Tools",
  "image-tools": "Image Tools",
  "css-tools": "CSS Tools",
  "coding-tools": "Coding Tools",
  "color-tools": "Color Tools",
  "Miscellaneous-tools": "Miscellaneous Tools",
};

export async function buildSidebarData() {
  const response = await fetch('/data.json');
  const tools = await response.json();

  return Object.values(
    tools.reduce((acc, tool) => {
      if (!acc[tool.category]) {
        acc[tool.category] = {
          category: tool.category,
          displayName: CATEGORY_LABELS[tool.category] || tool.category,
          tools: [],
        };
      }

      acc[tool.category].tools.push({
        title: tool.title,
        slug: tool.slug.trim().toLowerCase(),
        image: tool.image,
      });

      return acc;
    }, {})
  );
}
