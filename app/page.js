import FooterCharts from "@/components/FooterCharts";
import MainLayout from "@/components/MainLayout";
import Nav from "@/components/Nav";
import requests from "@/components/Requests";

export default function Home() {
  return (
    <main className="bg-slate-100">
      
      <Nav />
      <MainLayout />
      
      <FooterCharts trendingCoinsProps = {requests.fetchTrending}/>
    </main>
  );
}
