const task = "Format this text as clean, readable Markdown";
const userInput =
  "Markdown Markdown is a lightweight and popular markup language. It is used for all sorts of text formatting.";

generateMarkdown(userInput)
  .then((markdown) => {
    // Display the generated markdown in the console for verification
    console.log(markdown);
  })
  .catch((error) => {
    console.error("Failed to generate markdown:", error);
  });
