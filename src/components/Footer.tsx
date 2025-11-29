const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Made by Swayam Arora
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;