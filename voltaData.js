// voltaData.js

// Sample course database
const courses = [
  {
    title: "Intro to HTML & CSS",
    platform: "freeCodeCamp",
    topic: "web development",
    level: "beginner",
    format: "interactive",
    language: "en",
    url: "https://www.freecodecamp.org/learn"
  },
  {
    title: "Machine Learning with Python",
    platform: "Coursera",
    topic: "machine learning",
    level: "intermediate",
    format: "video",
    language: "pt",
    url: "https://pt.coursera.org/learn/machine-learning"
  },
  {
    title: "JavaScript Basics",
    platform: "Codecademy",
    topic: "web development",
    level: "beginner",
    format: "interactive",
    language: "en",
    url: "https://www.codecademy.com/learn/introduction-to-javascript"
  },
  {
    title: "CS50 (Intro to Computer Science)",
    platform: "Harvard/edX",
    topic: "computer science",
    level: "beginner",
    format: "video",
    language: "pt",
    url: "https://cs50.harvard.edu/x/"
  },
  {
    title: "Python for Everybody",
    platform: "Coursera",
    topic: "programming",
    level: "beginner",
    format: "video",
    language: "pt",
    url: "https://www.coursera.org/specializations/python"
  },
];

function matchCourses(answers) {
  const [topic, level, length, subtitles, format, goal] = answers;

  return courses.filter(course => {
    return (
      course.topic.toLowerCase().includes(topic.toLowerCase()) &&
      course.level.toLowerCase().includes(level.toLowerCase()) &&
      (subtitles.toLowerCase() === "yes" ? course.language === "pt" : true) &&
      course.format.toLowerCase().includes(format.toLowerCase())
    );
  }).slice(0, 3);
}
