import resume from '../../assets/0fc11f5ef144c210fdcda694dd943377af547960.png';

export const resumeImage = resume;

export const downloadResume = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Rithish-Kumar-Resume.png'; // Or a more dynamic name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
