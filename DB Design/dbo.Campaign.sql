CREATE TABLE [dbo].[Campaign] (
    [Id]                    INT             IDENTITY (1, 1) NOT NULL,
    [pendingCases]          INT             NOT NULL,
    [assertedPatents]       INT             NOT NULL,
    [patents_subjectTo_IPR] INT             NOT NULL,
    [moneySpent]            MONEY NOT NULL,
    [Name]                  NVARCHAR (MAX)  DEFAULT (N'') NOT NULL,
    CONSTRAINT [PK_Campaign] PRIMARY KEY CLUSTERED ([Id] ASC)
);

