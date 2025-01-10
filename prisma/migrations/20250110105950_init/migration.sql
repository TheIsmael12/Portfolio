/*
  Warnings:

  - You are about to alter the column `title` on the `Careers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `desc` on the `Careers` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.
  - You are about to alter the column `title` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `desc` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- DropIndex
DROP INDEX `Projects_title_key` ON `Projects`;

-- AlterTable
ALTER TABLE `Careers` MODIFY `title` JSON NOT NULL,
    MODIFY `desc` JSON NOT NULL;

-- AlterTable
ALTER TABLE `Projects` MODIFY `title` JSON NOT NULL,
    MODIFY `desc` JSON NOT NULL;

-- CreateTable
CREATE TABLE `Education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `degree` JSON NOT NULL,
    `institution` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `finishDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
