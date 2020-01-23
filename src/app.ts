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
  constructor(id: string) {
    super(id, "IT");
  }
}

const accounting = new Department("08", "Accounting");

accounting.addEmployee("Antoine");
accounting.addEmployee("Kelly");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Antoine", describe: accounting.describe };

// accountingCopy.describe();
