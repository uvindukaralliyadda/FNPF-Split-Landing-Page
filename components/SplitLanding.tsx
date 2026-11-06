"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Side = {
  key: "new" | "existing";
  href: string;
  ariaLabel: string;
  image: string;
  imagePosition: string;
  label: string;
  heading: string;
  text: string;
  cta: string;
};

// Update the hrefs to the real WordPress page URLs once the site structure is set.
const SIDES: Side[] = [
  {
    key: "new",
    href: "/new-members",
    ariaLabel: "Enter the New Members site",
    image: "/images/new-members.jpg",
    imagePosition: "50% 20%",
    label: "New Members",
    heading: "Start your FNPF journey",
    text: "How to register, how contributions work, the benefits you are entitled to, and guides for first-time members and employers.",
    cta: "Enter New Member Hub",
  },
  {
    key: "existing",
    href: "/members",
    ariaLabel: "Enter the Existing Members site",
    image: "/images/existing-members.jpg",
    imagePosition: "40% 30%",
    label: "Existing Members",
    heading: "Your savings, your services",
    text: "Withdrawals and assistance, statements, nominee and detail updates, myFNPF access and the latest member notices.",
    cta: "Enter Member Hub",
  },
];

export default function SplitLanding() {
  const leftRef = useRef<HTMLAnchorElement>(null);
  const seamRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Keep the seam and logo centred on the boundary as the halves resize on hover
  useEffect(() => {
    const left = leftRef.current;
    const seam = seamRef.current;
    const logo = logoRef.current;
    if (!left || !seam || !logo) return;

    const sync = () => {
      if (window.innerWidth < 900) {
        seam.style.left = "";
        logo.style.left = "";
        return;
      }
      const x = `${left.getBoundingClientRect().width}px`;
      seam.style.left = x;
      logo.style.left = x;
    };

    const ro = new ResizeObserver(sync);
    ro.observe(left);
    window.addEventListener("resize", sync);
    sync();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <main className="split">
      {SIDES.map((side, i) => (
        <Link
          key={side.key}
          ref={i === 0 ? leftRef : undefined}
          href={side.href}
          className={`side ${side.key}`}
          aria-label={side.ariaLabel}
        >
          <Image
            src={side.image}
            alt=""
            fill
            priority
            sizes="(max-width: 899px) 100vw, 60vw"
            className="side-photo"
            style={{ objectPosition: side.imagePosition }}
          />
          <div className="text">
            <div className="label">{side.label}</div>
            <h2>{side.heading}</h2>
            <p>{side.text}</p>
            <div className="enter">
              {side.cta} <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </Link>
      ))}

      <div className="seam" ref={seamRef} aria-hidden="true" />

      <div className="logo" ref={logoRef}>
        <Image src="/images/fnpf-logo.jpg" alt="FNPF" width={96} height={87} priority />
      </div>
    </main>
  );
}
