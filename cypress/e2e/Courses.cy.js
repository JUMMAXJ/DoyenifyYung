///<reference types ='cypress'/>
describe("To register for a course on Dashboard", () => {
  const user = "Good";
  const lastName = "Soul";
  const cardNumber = "4242424242424242";
  const cardExpiry = "1230";
  const cardCvc = "123";
  const country = "Estonia";
  beforeEach(() => {
    //cy.loginBySession("username","password");
    cy.visit("/");
  });

  before(() => {
    cy.log("This test hook will run once");
  });

  after(() => {
    cy.log("This test hook run after all test cases have been executed");
  });

  afterEach(() => {
    cy.log("This test hook run after each test case has been executed");
  });

  const Email = "beeneing1944@armyspy.com";
  const Password = "Joy12345";
  const PromoCode ="1234567";

  it("To register for a course", () => {
    cy.contains("Login").click({force:true});
    cy.get("#Email").type(Email);
    cy.get("#Password").type(Password);
    cy.get('[type="submit"]').click();
    cy.get('svg').click({multiple:true});
    //cy.get('.border-r-8 > .ml-2').click({force:true});
    cy.wait(5000);
    cy.get('[href="/courseAvailable"] > .ml-2').click({force:true});
    cy.get('div svg').first().should('exist');
    cy.get(':nth-child(3) > .grid > :nth-child(2) > a > :nth-child(1) > .gap-x-4 > .shadow-lg > .relative > .rounded-2xl').click();
    cy.contains("Python Programming Basics").parent().click({ force: true });
    cy.contains("Back").click({ force: true });
    cy.contains("Python Programming Basics").parent().click({ force: true });
    //cy.url().should('contain','https://test.yung.doyenify.com/courseAvailable');
    cy.location("pathname").should("contain","/courseDetails/");
    //cy.wait(5000)
    //cy.get(':nth-child(3) > .grid > :nth-child(2) > a > :nth-child(1) > .gap-x-4 > .shadow-lg > .relative > .rounded-2xl').click({force:true});
    //cy.contains("Introduction to Java").click({ force: true });
    //cy.wait(4000);

    //Assertions
    // ✅ Eligibility
    cy.contains('Eligibility').next().should('contain.text', 'Age 5 - 10');

    // ✅ Program Delivery
    cy.contains('Program Delivery').next().should('contain.text', 'Online');

    // ✅ Duration
    cy.contains('Duration').next().should('contain.text', '32 weeks');
    cy.wait(5000);

    // ✅ Module Count
    //cy.contains('Program').next().should('contain.text', '12 modules');
    cy.contains('Program').should('be.visible');
    cy.contains('12 modules').should('be.visible');
    cy.contains('Course Modules').should('be.visible');
    const moduleTitles = [
    'Module 1: Python Basics and Setup (8 Lessons)',
    'Module 2: Control Structures and Loops (8 Lessons)',
    'Module 3: Functions and Error Handling (8 Lessons)',
    'Module 4: Data Structures in Python (8 Lessons)',
    'Module 5: Object-Oriented Programming (OOP) (8 Lessons)',
    'Module 6: Game Development with Pygame (8 Lessons)',
    'Module 7: Advanced Topics (8 Lessons)',
    'Module 8: Data Handling and Visualization (8 Lessons)',
    'Module 9: Specialty Module 1 - Introduction to Web Development with Flask (8 Lessons)',
    'Module 10: Specialty Module 2 - Advanced Flask and Backend Development (8 Lessons)',
    'Module 11: Specialty Module 3 - Frontend Development with HTML, CSS, and JavaScript (8 Lessons)',
    'Module 12: Full-Stack Development and Final Project (8 Lessons)'
   ];

    moduleTitles.forEach((moduleText) => {
    cy.contains(moduleText).should('be.visible');
   });
   cy.wait(5000);
   // cy.get(".inter-600.text-base").should('have.length', 12);
  
    //cy.contains('Module 1: Python Basics and Setup').parent().should('contain.text', '8 Lessons');
    ////cy.contains('Module 2: Control Structures and Loop').parent().should('contain.text', '8 Lessons');
   // cy.contains('Module 1: Python Basics and Setup').parent().should('contain.text', '8 Lessons');


    cy.get(':nth-child(1) > .justify-between > .flex-col > .flex > .mr-3').click({ force:true});
    const lesson1= [
      'Lesson 1: Introduction to Python',
      'Lesson 2: Python Syntax and Variables',
      'Lesson 3: Data Types',
      'Lesson 4: Input and Output',
      'Lesson 5: Basic Arithmetic Operators',
      'Lesson 6: String Manipulation',
      'Lesson 7: Conditional Statements',
      'Lesson 8: Mini Project 1'
    ];
    lesson1.forEach((lesson1) => {
      cy.contains(lesson1).should('be.visible');
    });

   cy.get(':nth-child(2) > .justify-between > .flex-col > .flex > .inter-600').click({force:true}); 
    const lesson2 = [
     'Lesson 1: Introduction to Loops',
     'Lesson 2: For Loops',
     'Lesson 3: Nested Loops',
     'Lesson 4: Break and Continue Statements',
     'Lesson 5: Lists in Python',
     'Lesson 6: List Iteration',
     'Lesson 7: Tuples in Python',
     'Lesson 8: Mini Project 2'
   ];
    lesson2.forEach((lesson2)=> {
      cy.contains(lesson2).should('be.visible');
    });

    cy.get(':nth-child(3) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson3 =[
     'Lesson 1: Introduction to Functions',
     'Lesson 2: Function Parameters and Return Values',
     'Lesson 3: Scope and Lifetime of Variables',
     'Lesson 4: Introduction to Error Handling',
     'Lesson 5: Python Modules',
     'Lesson 6: User-defined Modules',
     'Lesson 7: Practice with Functions and Modules',
     'Lesson 8: Mini Project 3'

    ];
    lesson3.forEach((lesson3)=> {
      cy.contains(lesson3).should('be.visible');
    });

    cy.get(':nth-child(4) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson4 = [
      'Lesson 1: Introduction to Dictionaries',
      'Lesson 2: Dictionary Methods',
      'Lesson 3: Sets in Python',
      'Lesson 4: Working with Multiple Data Structures',
      'Lesson 5: Nested Data Structures',
      'Lesson 6: File Handling (Reading from files)',
      'Lesson 7: Writing to Files',
      'Lesson 8: Mini Project 4'
    ];
    lesson4.forEach((lesson4)=> {
      cy.contains(lesson4).should('be.visible');
    });

    cy.get(':nth-child(5) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson5 = [
      'Lesson 1: Introduction to OOP',
      'Lesson 2: Creating Classes and Objects',
      'Lesson 3: Class Attributes and Methods',
      'Lesson 4: Constructors in Python',
      'Lesson 5: Inheritance',
      'Lesson 6: Polymorphism and Method Overriding',
      'Lesson 7: Practice with OOP',
      'Lesson 8: Mini Project 5'
    ];
    lesson5.forEach((lesson5)=> {
      cy.contains(lesson5).should('be.visible');
    });

    cy.get(':nth-child(6) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson6 =[
     'Lesson 1: Introduction to Pygame',
     'Lesson 2: Setting Up a Pygame Window',
     'Lesson 3: Event Handling',
     'Lesson 4: Moving Objects in Pygame',
     'Lesson 5: Collision Detection',
     'Lesson 6: Scoring System in Games',
     'Lesson 7: Adding Sound and Music',
     'Lesson 8: Mini Project 6'
    ];
    lesson6.forEach((lesson6)=> {
      cy.contains(lesson6).should('be.visible');
    });


    cy.get(':nth-child(7) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson7 =[
      'Lesson 1: Recursion',
      'Lesson 2: Lambda Functions',
      'Lesson 3: Map, Filter, and Reduce Functional Programming in Python',
      'Lesson 4: List Comprehension',
      'Lesson 5: Decorators',
      'Lesson 6: Generators',
      'Lesson 7: Context Managers',
      'Lesson 8: Mini Project 7'
    ];
    lesson7.forEach((lesson7)=> {
      cy.contains(lesson7).should('be.visible');
    });

    cy.get(':nth-child(8) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson8 =[
    'Lesson 1: Introduction to Data Handling',
    'Lesson 2: Using Pandas for Data Analysis',
    'Lesson 3: Data Cleaning',
    'Lesson 4: Introduction to Data Visualization',
    'Lesson 5: Working with Bar Charts',
    'Lesson 6: Line Graphs and Scatter Plots',
    'Lesson 7: Customizing Plots',
    'Lesson 8: Mini Project 8'
    ];
    lesson8.forEach((lesson8)=> {
      cy.contains(lesson8).should('be.visible');
    });
    
    cy.get(':nth-child(9) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson9 =[
      'Lesson 1: Introduction to Web Development and Flask',
      'Lesson 2: Flask Routing',
      'Lesson 3: Dynamic Routing in Flask',
      'Lesson 4: Handling HTTP Methods (GET, POST)',
      'Lesson 5: HTML and Flask Templates',
      'Lesson 6: Using Static Files (CSS, JS)',
      'Lesson 7: Creating a Basic Web Application',
      'Lesson 8: Mini Project 1'
    ];
    lesson9.forEach((lesson9)=> {
      cy.contains(lesson9).should('be.visible');
    });

    cy.get(':nth-child(10) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson10 =[
      'Lesson 1: Introduction to Databases in Flask',
      'Lesson 2: Setting up SQLite with Flask',
      'Lesson 3: CRUD Operations',
      'Lesson 4: User Authentication in Flask',
      'Lesson 5: Flask Sessions and Cookies',
      'Lesson 6: Flash Messages and Error Handling',
      'Lesson 7: Creating RESTful APIs with Flask',
      'Lesson 8: Mini Project 2'
    ];
    lesson10.forEach((lesson10)=> {
      cy.contains(lesson10).should('be.visible');
    });
    
    cy.get(':nth-child(11) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson11 =[
      'Lesson 1: Introduction to HTML',
      'Lesson 2: Introduction to CSS',
      'Lesson 3: Advanced CSS (Flexbox, Grid)',
      'Lesson 4: Introduction to JavaScript for Frontend',
      'Lesson 5: DOM Manipulation with JavaScript',
      'Lesson 6: Fetching Data using JavaScript',
      'Lesson 7: Integrating JavaScript with Flask',
      'Lesson 8: Mini Project 3'
    ];
    lesson11.forEach((lesson11)=> {
      cy.contains(lesson11).should('be.visible');
    });

    cy.get(':nth-child(12) > .justify-between > .flex-col > .flex > .inter-600').click({force:true});
    const lesson12 =[
      'Lesson 1: Full-Stack Development Workflow',
      'Lesson 2: Flask and Frontend Integration',
      'Lesson 3: Deployment of Flask Applications',
      'Lesson 4: Debugging and Testing Flask Applications',
      'Lesson 5: Building Secure Web Applications',
      'Lesson 6: Introduction to Flask Extensions',
      'Lesson 7: Advanced Topics in Flask',
      'Lesson 8: Final Project'
    ];
    lesson12.forEach((lesson12)=> {
      cy.contains(lesson12).should('be.visible');
    });

    cy.contains('Course Perks').should('be.visible');
    const expectedPerks = [
      'Interactive Coding Exercises',
      'Live Tutoring Sessions',
      'Certificate of Completion',
      'Access to Exclusive Coding Community',
      'Downloadable Resources'

    ];
    expectedPerks.forEach((expectedPerks) => {
      cy.contains(expectedPerks).should('be.visible');
    });
    
   /* cy.contains('Courses you may like').should('be.visible');
    cy.contains('Try a free class').should('be.visible');
    cy.contains('Try a free class').click();
    cy.url().should('contain','https://test.yung.doyenify.com/try-a-free-class');
    //cy.get('.site-logo').should('be.visible');
    cy.contains('Book a free class').should('be.visible');
    cy.contains('Select available date and time').should('be.visible');
    const allowedTimeZones = ["CET", "EET", "EST", "WAT"];
    //const userChoice = "EET"; // Dynamically selected by user
     
    allowedTimeZones.forEach((allowedTimeZones) => {
      cy.contains(allowedTimeZones).should('be.visible');
    });
    cy.contains('Please select a time zone').should('be.visible');
   
    const availableDates = [
      "2025-07-10T12:00",
      "2025-07-10T14:00",
      "2025-07-10T16:00",
      "2025-07-11T12:00",
      "2025-07-11T14:00",
      "2025-07-11T16:00",
      "2025-07-12T12:00",
      "2025-07-12T14:00",
      "2025-07-12T16:00",
      "2025-07-14T12:00",
      "2025-07-14T14:00",
      "2025-07-14T16:00",
      "2025-07-15T12:00",
      "2025-07-15T14:00",
      "2025-07-15T16:00"
    ];

    cy.wait(5000);
    availableDates.forEach((availableDates) => {
      cy.contains(availableDates).should('exist');
    });

    cy.contains('Book Now').click({force:true});
    cy.contains('EET').click({force:true});
    cy.get('.grid > :nth-child(3)').click({force:true});
    cy.contains('Book Now').click({force:true});
    cy.wait(5000)
    cy.contains('Yes,I will be available').click();
    cy.contains('Thank you for booking a free class').should('be.visible');*/
    cy.contains('Start Learning').click({force:true});
    cy.wait(5000);
    cy.url().should('contain','https://test.yung.doyenify.com/plans/family');
    const monthlyPlanFeatures = [
      'Monthly Plan',
      '€',
      '80',
      '8 Lessons',
      'Self-paced learning',
      '4 assignments',
      '1 capstone project',
      'Learners Badge',
      'Pay Now'
    ];
    monthlyPlanFeatures.forEach((monthlyPlanFeatures) => {
      cy.contains(monthlyPlanFeatures).should('be.visible');
    });


    const quarterlyPlanFeatures = [
      'Quarterly Plan',
      '€',
      '180',
      '24 Lessons',
      'Direct classes with instructor',
      'Self-paced learning',
      '8 Assignments',
      '3 Capstone Projects',
      'Eligibility for showcases',
      'Monthly progress reviews',
      'Learners Badge',
      'Pay Now'
    ];
    quarterlyPlanFeatures.forEach((quarterlyPlanFeatures) => {
      cy.contains(quarterlyPlanFeatures).should('be.visible');
    });

     
    const halfYearlyPlanFeatures = [
      'Half-Yearly Plan',
      '€',
      '360',
      '48 Lessons',
      '12 Assignments',
      'Direct classes with instructor',
      'Self-paced learning',
      '6 Capstone Projects',
      'Eligibility for showcases',
      'Monthly progress reviews',
      'Certificate of completion',
      'Pay Now'
    ];
    halfYearlyPlanFeatures.forEach((halfYearlyPlanFeatures) => {
      cy.contains(halfYearlyPlanFeatures).should('be.visible');
    });


    const yearlyPlanFeatures = [
      'Yearly Plan',
      '€',
      '720',
      '96 Lessons',
      '16 Assignments',
      'Direct classes with instructor',
      'Self-paced learning',
      '8 Capstone Projects',
      'Eligibility for showcases',
      'Monthly progress reviews',
      'Certificate of completion',
      'Pay Now'
    ];

    yearlyPlanFeatures.forEach((yearlyPlanFeatures) => {
      cy.contains(yearlyPlanFeatures).should('be.visible');
    });
    cy.contains('Pay Now').click({multiple:true});
    cy.get('#glory').click();
    cy.contains('Proceed to payment').click({multiple:true});
    cy.wait(5000);
    cy.get('[placeholder="Promo Code"]').type(PromoCode);
    cy.contains('Apply').click({multiple:true});
    cy.contains('Pay with Stripe').click({multiple:true});
    //cy.get('[type=button]').click({multiple:true});
    //cy.get('[placeholder="Promo Code"]').should('have.lenght.within', 6, 10);

    //cy.get('[placeholder="Promo Code"]').invoke('val').should('have.length.within', 6, 10);
    cy.intercept('POST', '/api/create-checkout-session').as('createSession');

    cy.window().then((win) => {
      cy.stub(win.location, 'assign').as('redirectStub');
    });

    cy.get('button.checkout').click();

    cy.wait('@createSession').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    cy.get('@redirectStub').should('have.been.calledWithMatch', /https:\/\/checkout\.stripe\.com/);

    cy.location("pathname").should("eq","//checkout.stripe.com/");
    cy.url().should('include', 'checkout.stripe.com');
    cy.get('input#email').type(Email);
    cy.get('input#cardNumber').type(cardNumber);
    cy.get('input#cardExpiry').type(cardExpiry);
    cy.get('input#cardCvc').type(cardCvc);
    cy.get('input#billingName').type(`${user} ${lastName}`);
    cy.get('input#billingCountry').type(country);
    cy.get('input#enableStripePass').click();


    
  });

  
  

 

  

});



  
    
//cy.get(".mt-7 > .rounded-full").click({ force: true });
    // cy.contains("Proceed to payment").click({ force: true });
   // cy.wait(4000);
    //cy.contains("Pay Now").parent().click({ force: true });
    //cy.get(":nth-child(4) > .gap-4 > .flex > .text-xs").should("contain","Yearly Plan");
    //cy.get(":nth-child(4) > .w-full").click();
     
    // Confirm each lesson has the correct text in the correct order
   /*cy.get('.inter-600.text-base').each(($el, index) => {
   cy.wrap($el).invoke('text').then((text) => {
    expect(text.trim()).to.eq(lesson2[index]);
   });
   });
    // Confirm the number of lesson items
    cy.get('.inter-600.text-base').should('have.length', lesson2.length);*/
      

  



  

 
