/*
  Warnings:

  - You are about to drop the column `bandid` on the `Album` table. All the data in the column will be lost.
  - Added the required column `bandId` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_bandid_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "bandid",
ADD COLUMN     "bandId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
