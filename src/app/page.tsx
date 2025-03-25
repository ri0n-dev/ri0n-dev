import { Profile } from "@/components/section/profile";
import { Cards } from "@/components/section/cards";

export default function Home() {
  return (
    <div className="flex md:items-center md:justify-center h-screen">
      <div className="flex flex-col md:items-center md:justify-center w-full md:max-w-2xl gap-5 p-4">
        <Profile />
        <Cards />
      </div>
    </div>
  );
}
