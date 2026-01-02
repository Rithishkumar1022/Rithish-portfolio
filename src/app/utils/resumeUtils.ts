import resumeImage from "../../assets/0fc11f5ef144c210fdcda694dd943377af547960.png";

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