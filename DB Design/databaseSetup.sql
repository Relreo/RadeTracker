create table dbo.Campaign(
id int auto_increment NOT NULL,
CampaignName nvarchar(500) NOT NULL,
PendingCases int NOT NULL,
AssertedPatents int NOT NULL,
PatentsSubjectToIPR int NOT NULL,
MoneySpent decimal NOT NULL,
primary key(id)
);
/*
NOT DONE NEEDS WORK, AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
*/
create table dbo.Case(
id int auto_increment NOT NULL,
CaseName nvarchar(500) NOT NULL,
CampaignID int NOT NULL,
PatentNumber int NOT NULL,
Product nvarchar(500) NOT NULL,
MoneySpent decimal NOT NULL,
IPRStatus text NOT NULL,
primary key(id)
);