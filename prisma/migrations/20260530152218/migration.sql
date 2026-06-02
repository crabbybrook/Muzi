/*
  Warnings:

  - You are about to drop the column `extractedId` on the `Streams` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Streams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `channelName` to the `Streams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailURL` to the `Streams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Streams_extractedId_key";

-- AlterTable
ALTER TABLE "Streams" DROP COLUMN "extractedId",
ADD COLUMN     "channelName" TEXT NOT NULL,
ADD COLUMN     "thumbnailURL" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Streams_title_key" ON "Streams"("title");
