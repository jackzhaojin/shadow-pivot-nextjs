import Image from "next/image";

interface FooterLinkProps {
  href: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, icon, alt, children }: FooterLinkProps) {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image aria-hidden src={icon} alt={alt} width={16} height={16} />
      {children}
    </a>
  );
}
