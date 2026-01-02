import resumeImage from "../../assets/2421a8fd96f7e7f66e6f7eb0566ea49fed29146b.png";

export const downloadResume = (resumeUrl?: string) => {
  // Use provided URL or default to resumeImage
  const imageUrl = resumeUrl || resumeImage;
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'Rithish_Kumar_Resume.png';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { resumeImage };