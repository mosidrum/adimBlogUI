import Countdown from "@/components/Countdown";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <Countdown targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 60 * 8 + 1000 * 13)} />
    </main>
  );
}

