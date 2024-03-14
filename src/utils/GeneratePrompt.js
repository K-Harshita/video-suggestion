export const generatePrompt = (data) => {
  // Template string technique
  const promptTemplate = `Goal:
Learn about ${data.courseName}

Background:
Level of knowledge in this topic: ${data.levelOfKnowledge}
Familiar with ${data.topicFamiliar}
Topics to focus on: ${data.topicInterested}

Learning Resources:
Looking for 2 Youtube videos:
One long video (in-depth explanation)
One shorter video (concise overview)

Selection criteria:
High like-to-view ratio (indicator of quality)

Request:
Please provide links to 2 Youtube videos that meet the above criteria. ONLY GIVE THE LINKS. DO NOT GIVE ME ANY OTHER GENERATED TEXT!! `
  const prompt = promptTemplate
  return prompt
}
