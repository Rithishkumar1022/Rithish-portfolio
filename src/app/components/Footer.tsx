import { resumeData } from "../data/resume";

export function Footer() {
  return (
    <footer id="contact" className="relative z-50 bg-white pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 px-4 md:px-8 border-t border-border overflow-hidden">
        <div className="container mx-auto max-w-[1800px] flex flex-col items-center text-center">
            
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-6 md:mb-8 animate-pulse">
                ● Open to Opportunities
            </span>
            
            <a href={`mailto:${resumeData.email}`} className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-black tracking-tighter leading-none text-foreground hover:text-primary active:text-primary transition-colors duration-300 break-all">
                {resumeData.email}
            </a>
            
            <div className="mt-8 md:mt-12 flex gap-4 md:gap-8 flex-wrap justify-center">
                <a href={resumeData.social.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                    LinkedIn
                </a>
                <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                    GitHub
                </a>
                <a href="https://wa.me/919159832210" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                    WhatsApp
                </a>
            </div>

            <p className="mt-8 md:mt-12 font-mono text-xs text-muted-foreground">
                © {new Date().getFullYear()} Rithish Kumar. All Rights Reserved.
            </p>

        </div>
    </footer>
  );
}