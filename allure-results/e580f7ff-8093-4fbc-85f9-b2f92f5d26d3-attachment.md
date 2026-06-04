# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\addUser.spec.js >> @smoke Add New User
- Location: tests\ui\addUser.spec.js:6:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic:
      - complementary [ref=e4]:
        - navigation "Sidepanel" [ref=e5]:
          - generic [ref=e6]:
            - link "client brand banner" [ref=e7]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=e9]
            - text: 
          - generic [ref=e10]:
            - generic [ref=e11]:
              - generic [ref=e12]:
                - textbox "Search" [ref=e15]
                - button "" [ref=e16] [cursor=pointer]:
                  - generic [ref=e17]: 
              - separator [ref=e18]
            - list [ref=e19]:
              - listitem [ref=e20]:
                - link "Admin" [ref=e21]:
                  - /url: /web/index.php/admin/viewAdminModule
                  - generic [ref=e24]: Admin
              - listitem [ref=e25]:
                - link "PIM" [ref=e26]:
                  - /url: /web/index.php/pim/viewPimModule
                  - generic [ref=e40]: PIM
              - listitem [ref=e41]:
                - link "Leave" [ref=e42]:
                  - /url: /web/index.php/leave/viewLeaveModule
                  - generic [ref=e45]: Leave
              - listitem [ref=e46]:
                - link "Time" [ref=e47]:
                  - /url: /web/index.php/time/viewTimeModule
                  - generic [ref=e53]: Time
              - listitem [ref=e54]:
                - link "Recruitment" [ref=e55]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
                  - generic [ref=e61]: Recruitment
              - listitem [ref=e62]:
                - link "My Info" [ref=e63]:
                  - /url: /web/index.php/pim/viewMyDetails
                  - generic [ref=e69]: My Info
              - listitem [ref=e70]:
                - link "Performance" [ref=e71]:
                  - /url: /web/index.php/performance/viewPerformanceModule
                  - generic [ref=e79]: Performance
              - listitem [ref=e80]:
                - link "Dashboard" [ref=e81]:
                  - /url: /web/index.php/dashboard/index
                  - generic [ref=e84]: Dashboard
              - listitem [ref=e85]:
                - link "Directory" [ref=e86]:
                  - /url: /web/index.php/directory/viewDirectory
                  - generic [ref=e89]: Directory
              - listitem [ref=e90]:
                - link "Maintenance" [ref=e91]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
                  - generic [ref=e95]: Maintenance
              - listitem [ref=e96]:
                - link "Claim" [ref=e97]:
                  - /url: /web/index.php/claim/viewClaimModule
                  - img [ref=e100]
                  - generic [ref=e104]: Claim
              - listitem [ref=e105]:
                - link "Buzz" [ref=e106]:
                  - /url: /web/index.php/buzz/viewBuzz
                  - generic [ref=e109]: Buzz
      - banner [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]:
            - text: 
            - generic [ref=e113]:
              - heading "Admin" [level=6] [ref=e114]
              - heading "/ User Management" [level=6] [ref=e115]
          - link "Upgrade" [ref=e117]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
          - list [ref=e124]:
            - listitem [ref=e125]:
              - generic [ref=e126] [cursor=pointer]:
                - img "profile picture" [ref=e127]
                - paragraph [ref=e128]: Richard Johnson
                - generic [ref=e129]: 
        - navigation "Topbar Menu" [ref=e131]:
          - list [ref=e132]:
            - listitem [ref=e133] [cursor=pointer]:
              - generic [ref=e134]:
                - text: User Management
                - generic [ref=e135]: 
            - listitem [ref=e136] [cursor=pointer]:
              - generic [ref=e137]:
                - text: Job
                - generic [ref=e138]: 
            - listitem [ref=e139] [cursor=pointer]:
              - generic [ref=e140]:
                - text: Organization
                - generic [ref=e141]: 
            - listitem [ref=e142] [cursor=pointer]:
              - generic [ref=e143]:
                - text: Qualifications
                - generic [ref=e144]: 
            - listitem [ref=e145] [cursor=pointer]:
              - link "Nationalities" [ref=e146]:
                - /url: "#"
            - listitem [ref=e147] [cursor=pointer]:
              - link "Corporate Branding" [ref=e148]:
                - /url: "#"
            - listitem [ref=e149] [cursor=pointer]:
              - generic [ref=e150]:
                - text: Configuration
                - generic [ref=e151]: 
            - button "" [ref=e153] [cursor=pointer]:
              - generic [ref=e154]: 
    - generic [ref=e155]:
      - generic [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]:
            - heading "System Users" [level=5] [ref=e161]
            - button "" [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: 
          - separator [ref=e166]
          - generic [ref=e168]:
            - generic [ref=e170]:
              - generic [ref=e172]:
                - generic [ref=e174]: Username
                - textbox [ref=e176]
              - generic [ref=e178]:
                - generic [ref=e180]: User Role
                - generic [ref=e183] [cursor=pointer]:
                  - generic [ref=e184]: "-- Select --"
                  - generic [ref=e186]: 
              - generic [ref=e188]:
                - generic [ref=e190]: Employee Name
                - textbox "Type for hints..." [ref=e194]
              - generic [ref=e196]:
                - generic [ref=e198]: Status
                - generic [ref=e201] [cursor=pointer]:
                  - generic [ref=e202]: "-- Select --"
                  - generic [ref=e204]: 
            - separator [ref=e205]
            - generic [ref=e206]:
              - button "Reset" [ref=e207] [cursor=pointer]
              - button "Search" [ref=e208] [cursor=pointer]
        - generic [ref=e209]:
          - button " Add" [ref=e211] [cursor=pointer]:
            - generic [ref=e212]: 
            - text: Add
          - generic [ref=e213]:
            - separator [ref=e214]
            - generic [ref=e216]: No Records Found
          - table [ref=e218]:
            - rowgroup [ref=e219]:
              - row " Username  User Role  Employee Name  Status  Actions" [ref=e220]:
                - columnheader "" [ref=e221]:
                  - generic [ref=e223] [cursor=pointer]:
                    - checkbox "" [ref=e224]
                    - generic [ref=e226]: 
                - columnheader "Username " [ref=e227]:
                  - text: Username
                  - generic [ref=e228]:
                    - generic [ref=e229] [cursor=pointer]: 
                    - text:  
                - columnheader "User Role " [ref=e230]:
                  - text: User Role
                  - generic [ref=e231]:
                    - generic [ref=e232] [cursor=pointer]: 
                    - text:  
                - columnheader "Employee Name " [ref=e233]:
                  - text: Employee Name
                  - generic [ref=e234]:
                    - generic [ref=e235] [cursor=pointer]: 
                    - text:  
                - columnheader "Status " [ref=e236]:
                  - text: Status
                  - generic [ref=e237]:
                    - generic [ref=e238] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=e239]
            - rowgroup
      - generic [ref=e241]:
        - paragraph [ref=e242]: OrangeHRM OS 5.8
        - paragraph [ref=e243]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e244]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e246] [cursor=pointer]:
    - generic [ref=e247]:
      - generic [ref=e250]: 
      - generic [ref=e251]:
        - paragraph [ref=e252]: Error
        - paragraph [ref=e253]: Unexpected Error!
    - button "×" [ref=e255]
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
  48  |   await this.adminMenu.waitFor({
  49  |     state: 'visible'
  50  |   });
  51  | 
  52  |   await this.adminMenu.click();
  53  | 
  54  |   await this.page.waitForURL(/admin/);
  55  | 
  56  |   await this.addButton.waitFor({
  57  |     state: 'visible'
  58  |   });
  59  | 
  60  |   await this.addButton.click();
  61  | 
> 62  |   await this.page.waitForURL(/saveSystemUser/);
      |                   ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  63  | }
  64  | 
  65  |   async fillUserForm(
  66  |     username,
  67  |     password
  68  |   ) {
  69  | 
  70  |     await this.userRoleDropdown.waitFor({
  71  |       state: 'visible'
  72  |     });
  73  | 
  74  |     await this.userRoleDropdown.click();
  75  | 
  76  |     await this.page
  77  |       .getByRole('option',
  78  |       { name: 'ESS' })
  79  |       .click();
  80  | 
  81  |     await this.employeeInput.fill('a');
  82  | 
  83  |     await this.page.waitForSelector(
  84  |       '.oxd-autocomplete-option'
  85  |     );
  86  | 
  87  |     await this.page
  88  |       .locator(
  89  |         '.oxd-autocomplete-option'
  90  |       )
  91  |       .first()
  92  |       .click();
  93  | 
  94  |     await this.statusDropdown.click();
  95  | 
  96  |     await this.page
  97  |       .getByRole('option',
  98  |       { name: 'Enabled' })
  99  |       .click();
  100 | 
  101 |     await this.usernameInput.fill(
  102 |       username
  103 |     );
  104 | 
  105 |     await this.passwordInput.fill(
  106 |       password
  107 |     );
  108 | 
  109 |     await this.confirmPasswordInput.fill(
  110 |       password
  111 |     );
  112 | 
  113 |     await this.saveButton.click();
  114 |   }
  115 | 
  116 | }
```