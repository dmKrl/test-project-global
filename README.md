# Тестовое задание интернет-магазин
Данное приложение позволяет пользователям просматривать каталог товаров, добавлять в избранное, менять количество товара в корзине и отслеживать итоговую стоимость. Также, есть возможность заполнять форму и условно отправлять её.

## Описание работы проекта:
Страница каталога содержит в себе определённое количество доступных товаров с названием, описанием и ценой. Получение товаров осуществляется из обычного json файла и их перечень сохраняется в redux. На карточке есть возможность добавить товар в корзину. Также есть 2 доступных способа навигации, в header/footer. 
Страница корзины отображает список добавленных товаров, форму для оформления заказа, итоговую цену а также блок специальных предложений.
При поступлении товара в корзину, у пользователя есть возможность изменять количество каждого товара, удалять выбранных товар(в том числе количество указанного товара), переходить обратно на страницу каталога и делать полную очистку корзины.
Форма имеет базовую валидацию, при этом отслеживает наполненность корзины, если корзина пуста, кнопка отправки формы - не активна.

## Технический стек:
React
Redux
React Router
CSS Modules

## Установка и запуск проекта:
Необходимо кланировать репозиторий: git repo clone dm_krl/test-project-global;
Установить заисимости: npm install;
Запустить приложение: npm run start;
Откройте http://localhost:3000, чтобы просмотреть приложение.


