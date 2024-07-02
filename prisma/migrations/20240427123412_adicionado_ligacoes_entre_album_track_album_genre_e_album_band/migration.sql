/*
  Warnings:

  - Added the required column `bandid` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `albumId` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "bandid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "albumId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_AlbumGenrePivot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumGenrePivot_AB_unique" ON "_AlbumGenrePivot"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumGenrePivot_B_index" ON "_AlbumGenrePivot"("B");

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_bandid_fkey" FOREIGN KEY ("bandid") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
