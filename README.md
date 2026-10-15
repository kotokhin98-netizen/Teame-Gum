# 🚀 Командный статический сайт (HTML + CSS + JS)

Проект разработан командой из 3-х человек в рамках изучения CI/CD процессов.

## 👥 Состав команды
- **Лидер / Frontend:** [Котохин Артём Ильич] (Главная, О нас)
- **DevOps / Frontend:** [Никита Бакшилов Михайлович] (CI/CD, Услуги, Портфолио)
- **Frontend / Дизайн:** [Ярослав Толстухин Кирилович] (Стили, JS-анимации, Контакты)

## 🌐 Ссылки
- **Живой сайт:** [https://kotokhin98-netizen.github.io/-HTML-CSS-JS-CI-CD-Deploy-GitHub-Pages/](https://kotokhin98-netizen.github.io/-HTML-CSS-JS-CI-CD-Deploy-GitHub-Pages/)
- **Environments:** [Настройки окружения](https://github.com/kotokhin98-netizen/-HTML-CSS-JS-CI-CD-Deploy-GitHub-Pages/settings/environments)
- **Deployments:** [История деплоев](https://github.com/kotokhin98-netizen/-HTML-CSS-JS-CI-CD-Deploy-GitHub-Pages/deployments)

## 📂 Структура проекта
```mermaid
graph TD
    A[Репозиторий] --> B(.github/workflows/ci-cd.yml)
    A --> C(index.html)
    A --> D(about.html)
    A --> E(services.html)
    A --> F(portfolio.html)
    A --> G(contact.html)
    A --> H(assets/style.css)
    A --> I(assets/script.js)
    
    subgraph CI/CD Pipeline
    Push[Push to main] --> Check[Job: Check Files]
    Check -->|Success| Deploy[Job: Deploy to Pages]
    Deploy --> Live[Live Website URL]
    end

```
![Клонирование репозитория](2026-10-15_10-59-09.png)
![работа Ярослава](2026-10-15_10-59-12.png)
![Моя часть](2026-10-15_10-59-38.png)
![Моя часть 2 ](2026-10-15_11-42-47.png)
![Часть Никиты](image(1).png)
![CI/CD Инфраструктура](image(2).png)
![Создание js](2026-10-15_11-31-48.png)
![GitHub Pages в настройках](2026-10-15_11-25-10.png)
![проверка actions](2026-10-15_11-26-05.png)
![наш сайт](2026-10-15_12-00-59.png)

