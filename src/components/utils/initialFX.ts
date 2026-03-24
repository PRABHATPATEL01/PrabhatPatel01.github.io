import gsap from "gsap";
// Remove SplitText and smoother trial imports
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";

  // Safety check for smoother
  if (smoother && typeof smoother.paused === 'function') {
    smoother.paused(false);
  }

  const mainElement = document.getElementsByTagName("main")[0];
  if (mainElement) {
    mainElement.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Replacement for landingText (Simple slide up instead of SplitText)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1", ".landing-h2-info"],
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Note: LoopText logic removed as it heavily relies on SplitText objects.
  // Your site will now load without crashing the build!
}