# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\userJourney.spec.js >> Complete User Journey
- Location: tests\e2e\userJourney.spec.js:6:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1   | export class AddUserPage {
  2   | 
  3   |   constructor(page) {
  4   | 
  5   |     this.page = page;
  6   | 
  7   |     this.adminMenu =
  8   |       page.locator('span:has-text("Admin")');
  9   | 
  10  |     this.addButton =
  11  |       page.getByRole('button',
  12  |       { name: 'Add' });
  13  | 
  14  |     this.userRoleDropdown =
  15  |       page.locator('.oxd-select-text').nth(0);
  16  | 
  17  |     this.statusDropdown =
  18  |       page.locator('.oxd-select-text').nth(1);
  19  | 
  20  |     this.employeeInput =
  21  |       page.getByPlaceholder(
  22  |         'Type for hints...'
  23  |       );
  24  | 
  25  |     this.usernameInput =
  26  |       page.locator(
  27  |         'input.oxd-input'
  28  |       ).nth(2);
  29  | 
  30  |     this.passwordInput =
  31  |       page.locator(
  32  |         'input[type="password"]'
  33  |       ).nth(0);
  34  | 
  35  |     this.confirmPasswordInput =
  36  |       page.locator(
  37  |         'input[type="password"]'
  38  |       ).nth(1);
  39  | 
  40  |     this.saveButton =
  41  |       page.getByRole(
  42  |         'button',
  43  |         { name: 'Save' }
  44  |       );
  45  |   }
  46  |   async openAddUserForm() {
  47  | 
> 48  |   await this.adminMenu.click();
      |                        ^ Error: locator.click: Target page, context or browser has been closed
  49  | 
  50  |   await this.page.waitForURL(/admin/);
  51  | 
  52  |   await this.addButton.waitFor({
  53  |     state: 'visible'
  54  |   });
  55  | 
  56  |   await this.addButton.click();
  57  | 
  58  |   await this.page.waitForURL(/saveSystemUser/);
  59  | }
  60  | 
  61  |   async fillUserForm(
  62  |     username,
  63  |     password
  64  |   ) {
  65  | 
  66  |     await this.userRoleDropdown.waitFor({
  67  |       state: 'visible'
  68  |     });
  69  | 
  70  |     await this.userRoleDropdown.click();
  71  | 
  72  |     await this.page
  73  |       .getByRole('option',
  74  |       { name: 'ESS' })
  75  |       .click();
  76  | 
  77  |     await this.employeeInput.fill('a');
  78  | 
  79  |     await this.page.waitForSelector(
  80  |       '.oxd-autocomplete-option'
  81  |     );
  82  | 
  83  |     await this.page
  84  |       .locator(
  85  |         '.oxd-autocomplete-option'
  86  |       )
  87  |       .first()
  88  |       .click();
  89  | 
  90  |     await this.statusDropdown.click();
  91  | 
  92  |     await this.page
  93  |       .getByRole('option',
  94  |       { name: 'Enabled' })
  95  |       .click();
  96  | 
  97  |     await this.usernameInput.fill(
  98  |       username
  99  |     );
  100 | 
  101 |     await this.passwordInput.fill(
  102 |       password
  103 |     );
  104 | 
  105 |     await this.confirmPasswordInput.fill(
  106 |       password
  107 |     );
  108 | 
  109 |     await this.saveButton.click();
  110 |   }
  111 | 
  112 | }
```