import Backup from "./backup.js";
import Kitten from "./kitten.js";
const backup1 = new Backup("Media", "Photos");
backup1.display();
const backup2 = new Backup("Capacity", 50);
backup2.display();
const backup3 = new Backup("legal", true);
backup3.display();
const backup4 = new Backup("Date", new Date());
backup4.display();
const backup5 = new Backup("Kitten", new Kitten("Cyber", 4, "White"));
backup5.display();
