CREATE TABLE [dbo].[UserTable] (
    [Uname]     VARCHAR (50) NOT NULL,
    [Upassword] NCHAR (10)   NOT NULL,
    [Uphone]    VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Table] PRIMARY KEY CLUSTERED ([Upassword] ASC)
);

