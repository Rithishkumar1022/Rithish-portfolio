import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function NavbarMix() {
  const [showAlias, setShowAlias] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [currentName, setCurrentName] = useState("RITHISH");

  // Initial typing effect on page load
  useEffect(() => {
    if (!isTyping || displayText.length === currentName.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(currentName.slice(0, displayText.length + 1));
    }, 50); // Faster typing

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentName]);

  // Wait 5 seconds after typing completes, then start deleting
  useEffect(() => {
    if (isTyping && displayText.length === currentName.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setIsDeleting(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, displayText, currentName]);

  // Deleting animation
  useEffect(() => {
    if (!isDeleting) return;

    if (displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50); // Faster deleting
      return () => clearTimeout(timeout);
    } else {
      // Finished deleting, switch to the other name and start typing
      setIsDeleting(false);
      setIsTyping(true);
      setCurrentName(currentName === "RITHISH" ? "KUMAR" : "RITHISH");
      setShowAlias(!showAlias);
    }
  }, [displayText, isDeleting, currentName, showAlias]);

  return (
    <>
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 lg:p-8 text-foreground pointer-events-none"
    >
        <div className="pointer-events-auto min-w-[120px] md:min-w-[140px]">
             <a href="#index" className="block relative h-6 md:h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-0 left-0 origin-left"
                    >
                        <span className="font-black text-lg md:text-xl tracking-tighter uppercase leading-none whitespace-nowrap text-primary">
                            {displayText.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 },
                                        exit: { opacity: 0 }
                                    }}
                                    transition={{
                                        duration: 0.03,
                                        delay: i * 0.03
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.div>
                </AnimatePresence>
             </a>
        </div>

        <div className="pointer-events-auto hidden md:flex gap-6 lg:gap-8">
             {[
               { name: 'Index', href: '#index' },
               { name: 'Works', href: '#works' },
               { name: 'Profile', href: '#profile' },
               { name: 'Contact', href: '#contact' }
             ].map((item, i) => (
                 <a key={i} href={item.href} className="font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline">
                     {item.name}
                 </a>
             ))}
        </div>

        <div className="pointer-events-auto md:hidden">
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-[100] transition-transform active:scale-95 duration-200"
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-foreground" />
                ) : (
                    <span className="font-mono text-xs uppercase tracking-widest text-foreground">Menu</span>
                )}
            </button>
        </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
    {mobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-white md:hidden overflow-hidden"
            onClick={() => setMobileMenuOpen(false)}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    color: '#2563eb'
                }} />
            </div>

            <div className="relative flex flex-col items-center justify-center h-full gap-8 px-6 py-20">
                {/* Animated menu items */}
                {[
                    { name: 'Index', href: '#index' },
                    { name: 'Works', href: '#works' },
                    { name: 'Profile', href: '#profile' },
                    { name: 'Contact', href: '#contact' }
                ].map((item, i) => (
                    <motion.a 
                        key={i}
                        href={item.href}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{ 
                            duration: 0.5, 
                            delay: i * 0.08,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                                const element = document.getElementById(item.href.substring(1));
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }}
                        className="group relative text-5xl font-black uppercase tracking-tighter text-foreground overflow-hidden active:scale-95 transition-transform duration-200"
                    >
                        {/* Hover effect background */}
                        <motion.div 
                            className="absolute inset-0 bg-primary/10 -z-10 rounded-lg"
                            initial={{ scaleX: 0 }}
                            whileTap={{ scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            style={{ originX: 0 }}
                        />
                        
                        <span className="relative inline-block group-active:text-primary transition-colors duration-200">
                            {item.name}
                        </span>
                        
                        {/* Underline effect */}
                        <motion.div 
                            className="absolute bottom-0 left-0 h-[2px] bg-primary"
                            initial={{ scaleX: 0 }}
                            whileTap={{ scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            style={{ originX: 0 }}
                        />
                    </motion.a>
                ))}

                {/* Bottom info section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Available for work</span>
                    </div>
                    
                    {/* Cycling identity */}
                    <div className="relative h-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {!showAlias ? (
                                <motion.div
                                    key="full-mobile"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <span className="font-black text-xl tracking-tighter uppercase text-muted-foreground">RITHISH</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="alias-mobile"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <span className="font-black text-xl tracking-tighter uppercase text-muted-foreground">KUMAR</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )}
    </AnimatePresence>
    </>
  );
}