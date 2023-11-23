class Backup<T> {
    public subject: string;
    public value: T;

    public constructor(subject: string, value: T) {
        this.subject = subject;
        this.value = value;
    }

    public display(): void {
        console.log("Subject: " + this.subject);
        if (typeof this.value === "object") {
          console.log("Value: " + JSON.stringify(this.value));
        } else {
          console.log("Value: " + this.value);
        }
        console.log("-------------------------------");
      }
}

export default Backup;