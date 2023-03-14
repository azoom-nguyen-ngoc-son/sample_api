/*
  Warnings:

  - You are about to drop the column `content` on the `Comments` table. All the data in the column will be lost.
  - Added the required column `body` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comments` DROP COLUMN `content`,
    ADD COLUMN `body` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Posts` ADD COLUMN `body` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `dob` DATETIME(3) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
