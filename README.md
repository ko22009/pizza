#### Laravel API + SPA vue, vuex, router, axios ####

For testing:
login: user
password: user

* Laravel v.7.0
* Laravel Passport v.9.3
* Vue v.2.6.11
* Vuex v.3.5.1

**Deploting**
1. composer install
2. php artisan migrate:fresh --seed
3. php artisan passport:install
4. php artisan serve
5. cd frontend & yarn
6. yarn serve

If you need change backend ip, go to frontend/.env.develop

Build frontend from folder frontend.  
Automatic move files to public folder.

For dev: yarn serve,
For prod: yarn build

`Documentation`:
api/documentation
