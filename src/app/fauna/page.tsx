import Navigation from "@/components/sections/Navigation";
import FaunaSection from "@/components/sections/FaunaSection";
import Footer from "@/components/sections/Footer";

export default function FaunaPage() {
    return (
        <main className="min-h-screen bg-white pt-20 flex flex-col">
            <Navigation />
            <div className="flex-1 mt-10">
                <FaunaSection />
            </div>
            <Footer />
        </main>
    );
}
