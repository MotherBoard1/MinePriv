CREATE TABLE [dbo].[UserTable1]
(
	[Username] VARCHAR(50) NOT NULL , 
    [Userpassword] NCHAR(10) NOT NULL, 
    [Userphone] VARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_UserTable1] PRIMARY KEY ([Userpassword])  
)
