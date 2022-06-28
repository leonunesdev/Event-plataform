import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  isMenuLessonsOpen: Boolean;
}

export function Sidebar({ isMenuLessonsOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery()

  return (
    <aside className={classNames("mobile:absolute mobile:top-0 mobile:w-full mobile:h-full desktop:block desktop:static desktop:w-[348px] desktop:h-auto bg-gray-700 p-6 border-l border-gray-600", {
      'mobile:block': isMenuLessonsOpen,
      'mobile:hidden': !isMenuLessonsOpen,
    })}>
      <span className="font-bold text-2xl pb-6 mb-5 border-b border-blue-500 block">
        Conogramas de aulas
      </span>
      <div className="flex flex-col gap-9">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
