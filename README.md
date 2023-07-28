# Picasso test task micro frontend

## Demo Link
Github pages -> [click](https://xlebyshk.github.io/picasso-test-task-mf/)

## About Project

В приложении необходимо создать микрофронтовую архитектуру, состоящую из 3 частей:
1. Shell (представлен в виде header’а, в котором есть счетчик. Изначально счетчик равен нулю)
2. микрофронт 1 (страница с одной кнопкой “increment”)
3. микрофронт 2 (страница с одной кнопкой “decrement”)

Shell содержит в себе общий State, а микрофронты им управляют. При клике на кнопку “increment”
счетчик в header’e Shell увеличивается на 1, “decrement” - уменьшается на 1.

Результатом тестового задания ожидаем ссылку на GitHub репозиторий, с деплоем результата (github pages) или любой другой. В Readme опишите сборку приложения.

## Technologies
    - TypeScript
    - React
    - Webpack Module Federation
    - Webpack
    - Redux Toolkit
    - Sass

## Setup
Для запуска проекта запустите файл `start.bat`
Отрокойте в браузере `http://localhost:3000`
