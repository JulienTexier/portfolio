'use client';

import { useEffect } from 'react';

export function EasterEgg() {
  useEffect(() => {
    const message = `
 ██████╗██╗   ██╗██████╗ ██╗ ██████╗ ███████╗██╗████████╗██╗   ██╗    ██╗   ██╗███╗   ██╗██╗      ██████╗  ██████╗██╗  ██╗███████╗██████╗ ██╗
██╔════╝██║   ██║██╔══██╗██║██╔═══██╗██╔════╝██║╚══██╔══╝╚██╗ ██╔╝    ██║   ██║████╗  ██║██║     ██╔═══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗██║
██║     ██║   ██║██████╔╝██║██║   ██║███████╗██║   ██║    ╚████╔╝     ██║   ██║██╔██╗ ██║██║     ██║   ██║██║     █████╔╝ █████╗  ██║  ██║██║
██║     ██║   ██║██╔══██╗██║██║   ██║╚════██║██║   ██║     ╚██╔╝      ██║   ██║██║╚██╗██║██║     ██║   ██║██║     ██╔═██╗ ██╔══╝  ██║  ██║╚═╝
╚██████╗╚██████╔╝██║  ██║██║╚██████╔╝███████║██║   ██║      ██║       ╚██████╔╝██║ ╚████║███████╗╚██████╔╝╚██████╗██║  ██╗███████╗██████╔╝██╗
  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝      ╚═╝        ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝    `;

    const curiousText = '%ccurious%c';
    const normalText = `
Hi there, developer!
If you're looking for talent, consider this your official pitch:

I'm passionate about coding and always ${curiousText}, like you!

Let's build something great together! 🚀
    `;

    const baseStyles = 'font-family: monospace; font-size: 12px; color: #000;'; // Common styles

    const styles = {
      message: `${baseStyles} color: #b4d6fb;`, // For the ASCII art message
      regularText: baseStyles, // For standard text, inherits color
      curiousText: `${baseStyles} color: #b4d6fb; font-weight: bold;`, // Emphasized 'curious' text
      closingText: baseStyles, // Closing text style, inherits color
    };

    console.log(
      `%c${message}\n%c${normalText}`,
      styles.message,
      styles.regularText,
      styles.curiousText,
      styles.closingText
    );
  }, []);

  return null;
}
