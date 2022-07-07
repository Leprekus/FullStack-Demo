-- CreateTable
CREATE TABLE "TeamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "twitterURL" TEXT NOT NULL,
    "linkedInURL" TEXT NOT NULL
);
