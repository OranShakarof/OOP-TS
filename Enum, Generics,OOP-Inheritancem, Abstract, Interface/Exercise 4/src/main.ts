import Backup from "./backup.js";
import Kitten from "./kitten.js";

const backup1 = new Backup<string>("Media","Photos");
backup1.display();
const backup2 = new Backup<number>("Capacity",50);
backup2.display();
const backup3 = new Backup<boolean>("legal",true);
backup3.display();
const backup4 = new Backup<Date>("Date",new Date());
backup4.display();
const backup5 = new Backup<{}>("Kitten",new Kitten("Cyber",4,"White"));
backup5.display();