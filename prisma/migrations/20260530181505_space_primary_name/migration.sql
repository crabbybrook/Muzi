/*
  Warnings:

  - The primary key for the `Space` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Space" DROP CONSTRAINT "Space_pkey",
ADD CONSTRAINT "Space_pkey" PRIMARY KEY ("name");
