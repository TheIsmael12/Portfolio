/*
  Warnings:

  - You are about to drop the column `src` on the `Projects` table. All the data in the column will be lost.
  - Made the column `startDate` on table `Careers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `finishDate` on table `Careers` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `tecnologies` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Careers_title_key` ON `Careers`;

-- AlterTable
ALTER TABLE `Careers` MODIFY `startDate` DATETIME(3) NOT NULL,
    MODIFY `finishDate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Projects` DROP COLUMN `src`,
    ADD COLUMN `tecnologies` VARCHAR(191) NOT NULL;
