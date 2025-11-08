
export const readJsonFile = async (file: File) => {
  const reader = new FileReader();

  // Wait for the file to be read as text
  const fileText = await new Promise<string>((resolve, reject) => {
    reader.onload = (event) => resolve(event.target?.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });

  // Parse and return JSON data
  try {
    const json = JSON.parse(fileText);
    return json;
  } catch {
    throw new Error("Invalid JSON format");
  }
};

export default readJsonFile