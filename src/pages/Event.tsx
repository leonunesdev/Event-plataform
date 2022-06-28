import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [isMenuLessonsOpen, setIsMenuLessonsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header isMenuLessonsOpen={isMenuLessonsOpen} setIsMenuLessonsOpen={setIsMenuLessonsOpen} />
      <main className="flex flex-1 relative mobile:z-0 desktop:z-[1]">
        {slug
          ? <Video lessonSlug={slug} />
          : <Video lessonSlug="abertura" />}
        <Sidebar isMenuLessonsOpen={isMenuLessonsOpen} />
      </main>
    </div>
  )
}