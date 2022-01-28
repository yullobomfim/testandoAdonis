------------- database\migrations\1643343173121_users -------------

CREATE TABLE `users` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `name` VARCHAR(255), `password` VARCHAR(255), 
`created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344042618_vehicles -------------

CREATE TABLE `vehicles` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `brand` VARCHAR(255), `model` VARCHAR(255), `year` INT, `km` INT, `color` VARCHAR(255), `chassis` VARCHAR(255), `price` INT, `status` VARCHAR(255), `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344052272_employees -------------

CREATE TABLE `employees` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `jobPosition` VARCHAR(255), `salary` INT, 
`userId` VARCHAR(255), `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344175944_admins -------------

CREATE TABLE `admins` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `user` VARCHAR(255), `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344191978_sell_orders -------------

CREATE TABLE `sell_orders` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `dateString` VARCHAR(255), `price` INT, 
`employeeId` VARCHAR(255), `costumerId` VARCHAR(255), `vehicleId` VARCHAR(255), `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344205295_reservation_orders -------------

CREATE TABLE `reservation_orders` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `dateString` VARCHAR(255) NOT NULL, `totalPrice` INT NOT NULL, `employeeId` VARCHAR(255) NOT NULL, `costumerId` VARCHAR(255) NOT NULL, `vehicleId` VARCHAR(255) NOT NULL, `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------
------------- database\migrations\1643344803010_auths -------------

CREATE TABLE `auths` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `email` VARCHAR(255) NOT NULL, `password` VARCHAR(180) NOT NULL, `remember_me_token` VARCHAR(255) NULL, `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL)  

------------- END -------------
------------- database\migrations\1643344803014_api_tokens -------------

CREATE TABLE `api_tokens` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `user_id` INT unsigned, `name` VARCHAR(255) NOT NULL, `type` VARCHAR(255) NOT NULL, `token` VARCHAR(64) NOT NULL, `expires_at` DATETIME NULL, `created_at` DATETIME 
NOT NULL);
ALTER TABLE `api_tokens` ADD CONSTRAINT `api_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `auths` (`id`) ON DELETE CASCADE;
ALTER TABLE `api_tokens` ADD UNIQUE `api_tokens_token_unique`(`token`)

------------- END -------------
------------- database\migrations\1643346454359_customers -------------

CREATE TABLE `customers` (`id` INT unsigned NOT NULL auto_increment PRIMARY KEY, `user` VARCHAR(255), `created_at` DATETIME, `updated_at` DATETIME)

------------- END -------------