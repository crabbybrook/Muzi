/*
  Warnings:

  - A unique constraint covering the columns `[extractedId]` on the table `Streams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `extractedId` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streams" ADD COLUMN     "extractedId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Streams_extractedId_key" ON "Streams"("extractedId");
