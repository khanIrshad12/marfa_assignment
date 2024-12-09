import Image from "next/image";
import BlogPost from "./components/BlogPost";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <BlogPost />
    </div>
  );
}
