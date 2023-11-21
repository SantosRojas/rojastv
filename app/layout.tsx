import '@/app/ui/global.css';
import SideNav from "./ui/dashboard/sidenav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-1/6 ">
            <SideNav />
          </div>
          <div className="flex-grow w-full md:w-5/6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
