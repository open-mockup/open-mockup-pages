import React from "react";
import { Badge, Divider, Stack, Text, Title } from "@mantine/core";
import { DemoBlock } from "../components/DemoBlock.js";
import {
  ex01, ex01Code,
  ex02, ex02Code,
  ex03, ex03Code,
  ex04, ex04Code,
  ex05empty, ex05loading, ex05error, ex05Code,
  ex06, ex06Code,
  ex07, ex07Code,
  ex08, ex08Code,
  ex09, ex09Code,
  ex10, ex10Code,
  ex11, ex11Code,
  ex12, ex12Code,
  ex13, ex13Code,
  ex14, ex14Code,
  ex15, ex15Code,
  ex16, ex16Code,
  ex17, ex17Code,
  ex18, ex18Code,
  ex19, ex19Code,
  ex20, ex20Code,
} from "../examples/cookbook.js";

function Section({ n, title, description, children }: {
  n: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Text fw={500} size="xs" c="dimmed" tt="uppercase" mb={4}>
        #{n}
      </Text>
      <Title order={2} mb={4}>{title}</Title>
      <Text c="dimmed" mb="md">{description}</Text>
      {children}
    </div>
  );
}

export function CookbookPage() {
  return (
    <Stack gap="xl">
      <div>
        <Badge mb="xs" variant="light" color="violet" size="sm">Cookbook</Badge>
        <Title order={1} mb="xs">Cookbook</Title>
        <Text c="dimmed" size="lg">
          20 готовых паттернов от простых к сложным — каждый с превью, DSL JSON и исходным кодом.
        </Text>
      </div>

      <Divider />

      <Section n={1} title="Одна кнопка"
        description="Минимальный документ — один узел, без обёрток. Передаётся прямо в dsl().">
        <DemoBlock doc={ex01} code={ex01Code} />
      </Section>

      <Divider />

      <Section n={2} title="Горизонтальная панель кнопок"
        description="actionBar выравнивает кнопки и ссылки в ряд. Минимум один элемент.">
        <DemoBlock doc={ex02} code={ex02Code} />
      </Section>

      <Divider />

      <Section n={3} title="Простая форма"
        description="Три поля разных типов + кнопки submit/cancel через actions.">
        <DemoBlock doc={ex03} code={ex03Code} />
      </Section>

      <Divider />

      <Section n={4} title="KPI-плитки — равная сетка"
        description="grid с тремя колонками одинаковой ширины. Базовый паттерн для дашбордов.">
        <DemoBlock doc={ex04} code={ex04Code} />
      </Section>

      <Divider />

      <Section n={5} title="Состояния страницы"
        description="emptyState, loadingState и alert — три узла для обработки состояний данных.">
        <DemoBlock title="Empty state" doc={ex05empty}   code={ex05Code} />
        <DemoBlock title="Loading"     doc={ex05loading} code={ex05Code} />
        <DemoBlock title="Error"       doc={ex05error}   code={ex05Code} />
      </Section>

      <Divider />

      <Section n={6} title="Форма с предупреждением"
        description="Alert над формой — баннер о незаполненных данных или ошибке валидации.">
        <DemoBlock doc={ex06} code={ex06Code} />
      </Section>

      <Divider />

      <Section n={7} title="Split 1/2 — форма и превью рядом"
        description="ratio: 0.5 делит экран пополам. Левая — редактирование, правая — результат.">
        <DemoBlock doc={ex07} code={ex07Code} />
      </Section>

      <Divider />

      <Section n={8} title="Split 2/3 — основной контент и боковая панель"
        description="ratio: 0.33 — узкая боковая панель с метаданными, широкая правая — данные.">
        <DemoBlock doc={ex08} code={ex08Code} />
      </Section>

      <Divider />

      <Section n={9} title="Таблица с заголовком и пагинацией"
        description="Типовой список: section с actionBar сверху, таблица, пагинация снизу.">
        <DemoBlock doc={ex09} code={ex09Code} />
      </Section>

      <Divider />

      <Section n={10} title="Дашборд: метрики + чарт + таблица"
        description="Три зоны сверху вниз: KPI-сетка, линейный график, топ-продукты.">
        <DemoBlock doc={ex10} code={ex10Code} />
      </Section>

      <Divider />

      <Section n={11} title="Вкладки с разным контентом"
        description="tabs переключает между таблицей участников и формой настроек команды.">
        <DemoBlock doc={ex11} code={ex11Code} />
      </Section>

      <Divider />

      <Section n={12} title="Sidebar-навигация + контент"
        description="split ratio: 0.22 — узкий sidebar слева, основной контент справа.">
        <DemoBlock doc={ex12} code={ex12Code} />
      </Section>

      <Divider />

      <Section n={13} title="Модальное окно с подтверждением"
        description="modal с alert и формой — опасное действие требует явного ввода.">
        <DemoBlock doc={ex13} code={ex13Code} />
      </Section>

      <Divider />

      <Section n={14} title="Мастер (Wizard) — многошаговая форма"
        description="Breadcrumb показывает шаги, progress — прогресс. Форма текущего шага в card.">
        <DemoBlock doc={ex14} code={ex14Code} />
      </Section>

      <Divider />

      <Section n={15} title="Список с фильтрами и переключателем вида"
        description="section с split для actionBar + segmentedButton, форма фильтров, таблица, пагинация.">
        <DemoBlock doc={ex15} code={ex15Code} />
      </Section>

      <Divider />

      <Section n={16} title="Детальная страница заказа"
        description="split 0.28: резюме слева, tabs + таблица + форма редактирования справа.">
        <DemoBlock doc={ex16} code={ex16Code} />
      </Section>

      <Divider />

      <Section n={17} title="Страница настроек — sidebar + секции"
        description="Многосекционные настройки: profile + preferences, каждая в своей section с формой.">
        <DemoBlock doc={ex17} code={ex17Code} />
      </Section>

      <Divider />

      <Section n={18} title="Главная страница портала"
        description="topNav + KPI-сетка + split с двумя чартами + таблица последних заказов.">
        <DemoBlock doc={ex18} code={ex18Code} />
      </Section>

      <Divider />

      <Section n={19} title="Правый drawer с деталями записи"
        description="drawer side=right: метаданные тикета + форма добавления комментария.">
        <DemoBlock doc={ex19} code={ex19Code} />
      </Section>

      <Divider />

      <Section n={20} title="Полный CRM-экран"
        description="topNav + split(sidebar, split(список сделок, детальная панель)) — вложенные split.">
        <DemoBlock doc={ex20} code={ex20Code} />
      </Section>
    </Stack>
  );
}
