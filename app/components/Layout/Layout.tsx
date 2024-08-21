
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-800 w-screen">
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;