import { DashboardNavbar } from "@/components/navbar/dashboard-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardNavbar />
      <main>{children}</main>
    </div>
  );
}
