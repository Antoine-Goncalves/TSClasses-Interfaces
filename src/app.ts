abstract class Department {
  static fiscalYear = 2020;
  //   public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("Acoounting Department ID: " + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Report not found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Acoounting Department ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Antoine") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Antoine");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("08", ["Antoine"]);

it.addEmployee("Antoine");
it.addEmployee("Kelly");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountDepartment("59", []);

accounting.mostRecentReport = "Test";

accounting.addReports("Something wrong...");
console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee("Antoine");
accounting.addEmployee("Kelly");
// accounting.printEmployeeInformation();

accounting.describe();

// const itCopy = { name: "Antoine", describe: it.describe };

// itCopy.describe();
