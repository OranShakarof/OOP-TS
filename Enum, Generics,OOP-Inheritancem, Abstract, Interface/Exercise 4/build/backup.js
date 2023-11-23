class Backup {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    display() {
        console.log("Subject: " + this.subject);
        if (typeof this.value === "object") {
            console.log("Value: " + JSON.stringify(this.value));
        }
        else {
            console.log("Value: " + this.value);
        }
        console.log("-------------------------------");
    }
}
export default Backup;
