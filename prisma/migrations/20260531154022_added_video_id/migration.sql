/*
  Warnings:

  - You are about to drop the column `channelName` on the `Streams` table. All the data in the column will be lost.
  - Added the required column `videoId` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streams" DROP COLUMN "channelName",
ADD COLUMN     "videoId" TEXT NOT NULL;
