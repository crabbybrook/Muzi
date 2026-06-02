/*
  Warnings:

  - You are about to drop the column `spaceId` on the `Streams` table. All the data in the column will be lost.
  - Added the required column `spaceName` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Streams" DROP CONSTRAINT "Streams_spaceId_fkey";

-- AlterTable
ALTER TABLE "Streams" DROP COLUMN "spaceId",
ADD COLUMN     "spaceName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Streams" ADD CONSTRAINT "Streams_spaceName_fkey" FOREIGN KEY ("spaceName") REFERENCES "Space"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
