import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// We remove ScrollSmoother and SplitText for the build to pass
gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // Simple Fade-In for Paragraphs
  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) para.anim.kill();

    para.anim = gsap.fromTo(
      para,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // Simple Slide-Up for Titles
  titles.forEach((title: ParaElement) => {
    if (title.anim) title.anim.kill();

    title.anim = gsap.fromTo(
      title,
      { autoAlpha: 0, y: 50, rotate: 2 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });
}