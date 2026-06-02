/*
  Warnings:

  - The primary key for the `Space` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `spaceName` on the `Streams` table. All the data in the column will be lost.
  - You are about to drop the `Upvote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `spaceId` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Streams" DROP CONSTRAINT "Streams_spaceName_fkey";

-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_streamId_fkey";

-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_userId_fkey";

-- DropIndex
DROP INDEX "Space_name_key";

-- AlterTable
ALTER TABLE "Space" DROP CONSTRAINT "Space_pkey";

-- AlterTable
ALTER TABLE "Streams" DROP COLUMN "spaceName",
ADD COLUMN     "spaceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Upvote";

-- AddForeignKey
ALTER TABLE "Streams" ADD CONSTRAINT "Streams_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
