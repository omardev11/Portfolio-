//         Start Of Projects Info

class Project {
  constructor(name, description, toolused, videourl, sourcecode) {
    this.Name = name;
    this.Description = description;
    this.ToolUsed = toolused;
    this.VideoUrl = videourl;
    this.SourceCode = sourcecode;
  }
}

// Project One

let ProjectOneDescripton = `The Driving Vehicle License Department System enables the management of applications 
for obtaining driving licenses. Users can go through various tests, such as vision, written,
and street tests, to qualify for a license. The system also provides features for renewing licenses, detaining 
or releasing detained licenses, replacing lost or damaged licenses, and issuing international licenses. Additionally,
it allows administrators to manage the types of applications and tests available.
`;

const ProjectOne = new Project(
  "Driving Vehicle License Department System",
  ProjectOneDescripton,
  "C# , .Net , Sql , Window Forms",
  "https://www.youtube.com/playlist?list=PL4SjkoI2qsoXOWQMg3gWbU_HQTNg1hk5S",
  "https://github.com/omardev11/Driving-Vehicle-License-Department"
);

document.getElementById("FirstProject").onclick = function () {
  openModal(
    ProjectOne.Name,
    ProjectOne.Description,
    ProjectOne.ToolUsed,
    ProjectOne.VideoUrl,
    ProjectOne.SourceCode
  );
};

// Project Two

let longDescripProjectTwo = `The Pizza Ordering System provides a user-friendly interface for customers to 
select their preferred type of pizza, add extra toppings, and choose between takeout or dine-in options.
The application is developed using C# and Windows Forms, making it easy to navigate and use.
`;

const ProjectTwo = new Project(
  "Pizza Ordering System",
  longDescripProjectTwo,
  "C# , .Net , Window Forms",
  "https://youtu.be/gA8NBG6Kk68",
  "https://github.com/omardev11/The-Pizza-Project"
);

document.getElementById("ProjectTwo").onclick = function () {
  openModal(
    ProjectTwo.Name,
    ProjectTwo.Description,
    ProjectTwo.ToolUsed,
    ProjectTwo.VideoUrl,
    ProjectTwo.SourceCode
  );
};

// Project Three

let longDescripProjectThree = `The Tic Tac Toe game is a fun and engaging two-player game where players take turns
 marking a space in a 3x3 grid. The first player to align three of their marks horizontally, vertically, or diagonally
 wins the game. This application is built using C# and Windows Forms, providing an intuitive and interactive experience.
`;

const ProjectThree = new Project(
  "Tic Tac Toe Game",
  longDescripProjectThree,
  "C# , .Net , Window Forms",
  "https://www.youtube.com/watch?v=fwzg2ccEcYU",
  "https://github.com/omardev11/Tic-tac-toe-Game"
);

document.getElementById("ProjectThree").onclick = function () {
  openModal(
    ProjectThree.Name,
    ProjectThree.Description,
    ProjectThree.ToolUsed,
    ProjectThree.VideoUrl,
    ProjectThree.SourceCode
  );
};

// Project Four

let longDescripProjectFour = `The ATM System simulates a simple banking interface where users can perform various 
transactions. It supports quick and normal withdrawals, deposits, and checking account balances. Additionally,
it utilizes a NoSQL database for data storage, aimed at enhancing problem-solving skills.
`;

const ProjectFour = new Project(
  "ATM System (Console Application)",
  longDescripProjectFour,
  "C++ , NoSQL database",
  "https://www.youtube.com/watch?v=MHWZgVHIj3s",
  "https://github.com/omardev11/ATM-System"
);

document.getElementById("ProjectFour").onclick = function () {
  openModal(
    ProjectFour.Name,
    ProjectFour.Description,
    ProjectFour.ToolUsed,
    ProjectFour.VideoUrl,
    ProjectFour.SourceCode
  );
};

// Project Five

let longDescripProjectFive = `The Bank System enables users to perform various banking operations, including checking 
account balances, making deposits, and withdrawing funds. The system is designed to provide a simple and user-friendly
interface for managing accounts. Additionally, it utilizes NoSQL databases for data restoration, aimed at enhancing
learning and problem-solving skills.
`;

const ProjectFive = new Project(
  "Bank System (Console Application)",
  longDescripProjectFive,
  "C++ , NoSQL database",
  "https://www.youtube.com/playlist?list=PL4SjkoI2qsoWdrBicO4sAoAjFGQCdQau0",
  "https://github.com/omardev11/Bank-System"
);

document.getElementById("ProjectFive").onclick = function () {
  openModal(
    ProjectFive.Name,
    ProjectFive.Description,
    ProjectFive.ToolUsed,
    ProjectFive.VideoUrl,
    ProjectFive.SourceCode
  );
};

// Project Six

let longDescripProjectSix = `A classic and Simple game where you can play against the computer by choosing rock, 
paper, or scissors. The game will determine the winner based on the rules: rock crushes scissors, scissors cuts paper,
and paper covers rock.
`;

const ProjectSix = new Project(
  "Rock, Paper, Scissors Game (Console Application)",
  longDescripProjectSix,
  "C++ ",
  "https://www.youtube.com/watch?v=H6PKPaGORyQ",
  "https://github.com/omardev11/Simple-Rock-paper-scissors-Game"
);

document.getElementById("ProjectSix").onclick = function () {
  openModal(
    ProjectSix.Name,
    ProjectSix.Description,
    ProjectSix.ToolUsed,
    ProjectSix.VideoUrl,
    ProjectSix.SourceCode
  );
};

// Project Seven

let longDescripProjectSeven = `This project is a full-stack restaurant management system designed to handle various 
restaurant operations, including managing menus, employee information, customer registration, and order processing.
The system combines a pre-designed front-end template with a custom-built back-end using C# and SQL Server.


`;

const ProjectSeven = new Project(
  "Restaurant-Project",
  longDescripProjectSeven,
  "C#, SQL, JavaScript, HTML, CSS (adjusted pre-designed template)",
  "https://www.youtube.com/watch?v=QsxrbRlkhxw",
  "https://github.com/omardev11/Restaurant-Project"
);

document.getElementById("ProjectSeven").onclick = function () {
  openModal(
    ProjectSeven.Name,
    ProjectSeven.Description,
    ProjectSeven.ToolUsed,
    ProjectSeven.VideoUrl,
    ProjectSeven.SourceCode
  );
};

//         End Of Projects Info

window.onclick = function (event) {
  if (event.target == document.getElementById("projectModal")) {
    closeModal();
  }
};

function openModal(title, description, tools, demoLink, sourcecode) {
  // Update modal content dynamically
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").innerHTML = description;
  document.getElementById("modalTools").textContent = tools;
  document.getElementById("modalDemo").href = demoLink;
  document.getElementById("SourceCode").href = sourcecode;
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
