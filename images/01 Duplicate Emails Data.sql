
CREATE TABLE Contacts (
    ContactID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100),
    Email NVARCHAR(100)
);

with DublicatedEmails As 
(
  select Email , COUNT(*) as duplicateemail from Contacts  group by Email having COUNT(*) > 1

  )
select * from Contacts join   DublicatedEmails on Contacts.Email = DublicatedEmails.Email