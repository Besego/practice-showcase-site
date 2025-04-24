
import { InfoCard } from "@/components/InfoCard";
import { TaskCardWithGithub } from "@/components/TaskCardWithGithub";

const Week3 = () => {
  const tasks = [
    {
      title: "Мобильное приложение",
      description: "Разработка мобильного приложения",
      githubLink: "https://github.com/Besego/Reklamka/blob/main/second-week/app-release.apk",
      screenshots: ["/public/imagesMobile/first.jpg", "public/imagesMobile/second.jpg","public/imagesMobile/third.jpg","public/imagesMobile/fourth.jpg","public/imagesMobile/five.jpg","public/imagesMobile/six.jpg","public/imagesMobile/seven.jpg","public/imagesMobile/eight.jpg","public/imagesMobile/nine.jpg","public/imagesMobile/ten.jpg"],
    },
    {
      title: "Данные по тестированию",
      description: "Описание",
      screenshots: ["/public/imagesMobile/test1.png", "/public/imagesMobile/test2.png","/public/imagesMobile/test3.png","/public/imagesMobile/test4.png","/public/imagesMobile/test5.png","/public/imagesMobile/test6.png","/public/imagesMobile/test7.png"],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Третья неделя практики</h1>
      <div className="grid gap-8">
        {tasks.map((task, index) => (
          <TaskCardWithGithub key={index} {...task} />
        ))}
        <InfoCard title="Оценка програмного продукта с точки зрения эффективности использования ресурсов" text='Для приложения "Рекламное агентство" текущая реализация демонстрирует высокую эффективность. Все операции, включая создание и управление заказами, выполняются с приемлемой скоростью. Данные о клиентах, заказах и бюджетах надежно сохраняются и не теряются.' />
        <InfoCard title="Паттерн проектирования" text="В данном проекте я применил паттерн 'Singelton' для БД. Singleton гарантирует, что в приложении будет только один экземпляр объекта для работы с базой данных. Это предотвращает создание множества подключений к базе данных. Поскольку все запросы к базе данных проходят через один экземпляр, легче обеспечить согласованность операций." />
        <InfoCard title="Пути дальнейшей оптимизации" text="В дальнейшем нужно будет оптимизировать запросы к БД, адаптировать UI под все устройства." />
        <InfoCard title="Разработка сайта" text="Сайт разработан на языке TypeScript, используя фреймворк React. В качестве сборщика проекта используется Vite, в качестве пакетного менеджера npm/bun. Библиотека для компонентов - shadcn/ui, стилизация - Tailwind CSS, маршрутизация - React Router, управление состоянием  - TanStack Query, линтинг - ESLint." />
      </div>
    </div>
  );
};

export default Week3;
