import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-display mb-6">Let's build something amazing together</h2>
        
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <SocialLink href="https://www.linkedin.com/in/juliaokeyode" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
          <SocialLink href="https://www.instagram.com/_n.i.f.e/" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
          <SocialLink href="https://wa.me/2347069022091" icon={<MessageCircle className="w-5 h-5" />} label="WhatsApp" />
          <SocialLink href="mailto:juliaokeyode504@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          <SocialLink href="https://www.tiktok.com/@_n.i.f.e_?_r=1&_d=f1j267g224j56e&sec_uid=MS4wLjABAAAAGIB8hZvZuqPiO-dyKhYmBEEbOMtb_wzVCPkrCwI9eI4fGlcN9Gtz1DIgI_zLbd5U&share_author_id=7043462833912202246&sharer_language=en&source=h5_m&u_code=dm971gig7i0g3i&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=2A79ADE6-550F-4AA4-B055-B93760D1A18F&user_id=7043462833912202246&sec_user_id=MS4wLjABAAAAGIB8hZvZuqPiO-dyKhYmBEEbOMtb_wzVCPkrCwI9eI4fGlcN9Gtz1DIgI_zLbd5U&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233" icon={<SiTiktok className="w-5 h-5" />} label="Tiktok" />
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:-translate-y-1 border border-border"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
