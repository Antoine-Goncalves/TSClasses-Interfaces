class Department {
  //   public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) - ${this.name}`);
  }

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
}

class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("08", ["Antoine"]);

it.addEmployee("Antoine");
it.addEmployee("Kelly");

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountDepartment("59", []);

accounting.addReports("Something wrong...");
accounting.printReports();

// const itCopy = { name: "Antoine", describe: it.describe };

// itCopy.describe();
