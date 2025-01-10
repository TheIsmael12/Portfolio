/*
  Warnings:

  - You are about to drop the column `tecnologies` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `technologies` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Projects` DROP COLUMN `tecnologies`,
    ADD COLUMN `technologies` VARCHAR(191) NOT NULL;
