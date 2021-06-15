Budge:
This is my first project I've had the chance to work on whatever I wanted.  I initially only had 2 days to work on this, but I hope to have the chance to come back and finish the basic functionality as well as polish features up. To save time I started out using bootsrap components, but I would like to refactor how the tables are built out.

The vision is to create a budgeting app which combines 2 powerful budgeting strategies in one place: assigning every dollar a "job" (even if it's just to go into a savings account) and to have the functionality to set a predicted budget at the beginning of the month and then progressively fund those projections throughout the month (by giving dollars "jobs") as the user receives paychecks. 

Known Bugs: 
-having 0 or null values currently breaks some aggregation functions
-app is currently set to default to current month, but only May 2021 currently has the framework implemented. This breaks the app.
-adding new blank categories doesn't create separate entries in state

Next Features: 
-Ability to add transactions and income/transfers
-Ability to create user account/login
-Expanding budget to multiple months (available income will roll over)
-Ability to create template budgets / copy budgets from previous months
-Implement ability to retrieve budgets from previous years
-Creating an intialization walk-through for new users
