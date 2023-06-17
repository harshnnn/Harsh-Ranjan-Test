# Harsh-Ranjan-Test

1) Mention the working of Internet Website in Terms of Front-end & Back-end Divisions. <br/>
Ans- In an internet website the Front-end focuses on creating user interface and client
   side interactivity and the backend deals with server side processing and managing data.<br/><br/>
   Front-end -> Getting information from backend and configuring on screen which is pleasing,
   and easy to use.<br/><br/>
    > Techhnologies used in front-end -> <br/><br/>
     * HTML- It stands for Hyper Text Markup Language, a hyper text is text that is linked to
           other text.<br/>
     * CSS- It stands for Cascading Style Sheets, it is used to provide style and formatting to html elements.<br/>
     * JavaScript- It is used to add functionalities to a web page, such as adding onclick event to buttons,<br/> adding event listners etc.<br/><br/>
  Backend-> It happans primarly on remote servers and has a lot to do with formatting and storing data.<br/><br/>
    >  Techlologies used in backend -> <br/><br/>
     * Node.js - It is server-side JavaScript runtime environment which allows to use JavaScript for backend as well<br/>
     * Express.js- It is a web app framework for Node.js which helps build APIs and servers.<br/>
     * Mongodb - It is NoSql database used for backend, It provides high scalability, performance and flexibility. 
  
 2)  What are tags in HTML? Explain the each category of tag with an Example.  <br/>

 Ans- HTML tags are used to create the building blocks of a web-page.<br/>
 > Here are some of the tags used in html.<br/>
 * HTML tag- (`<html>`) It is just a declaration that the data should be viewed as html document.
 * Head tag- (`<head>`) It contains information about the html page, such as title, favicon and stylesheet.
 * Body tag- (`<body>`) It contains the visible content of the the web page.
 * h1 to h6 tags - These come with predefined size and are used for diving title to a content.
 * p tag- (`<p/>`) any text content can be written inside it.
 * Image tag - (`<img/>`) We can put any image to display on the web page.
 * br tag- (`<br/>`) Used to break the line.
   > There are also 2 types to write tags while creating html.<br/>
   Semantic tags and non Semantic tags<br/>
  -  Semantic tags carry meaning and provide contextual information about the content.<br/>
     * `<header/>` It is usually put at the top and has nav sections.
     * `<nav/>` We put all the navigation links in it.
     * `<main/>` The main content goes here.
     *  `<footer/>` We put it at the bottom of the web page, it has some contact info etc.
  - Non Semantic tags-
     * `<div/>` - We just create devisions and give the class. <br/><br/>


     
3) - Explain the working Procedure of Virtual DOM. <br>
Ans - The Virtual DOM (Document Object Model) is a concept used in web development frameworks like React to improve performance and efficiency in updating the user interface (UI) of web applications. It is a representation of the actual DOM in the form of a lightweight copy or abstraction.<br>
Following are steps for proper working procedure of Virtual DOM<br>
  * 1- Initial Render:
  When a web application is first loaded or a component is mounted, React creates a virtual representation of the UI called the Virtual DOM. This virtual     representation is a JavaScript object that mirrors the structure of the real DOM but is not directly attached to the browser's rendering engine.<br>
  * 2- Virtual DOM Structure:
The Virtual DOM is essentially a tree-like structure consisting of virtual elements or components. Each virtual element represents a component or an HTML element and contains properties such as the element type, attributes, and event handlers. The Virtual DOM is lightweight and can be quickly created and modified.
  * 3 Reconciliation:
When there is a change in the state or props of a component, React performs a process called reconciliation. It compares the previous version of the Virtual DOM with the updated version to identify the differences or updates that need to be made.
  * 4- Diffing:
During the reconciliation process, React efficiently performs a diffing algorithm to determine the minimal set of changes required to update the real DOM. It analyzes the differences between the previous and updated Virtual DOM structures and identifies which elements or components have changed.
  * 5 Update the Real DOM:
Once the differences or patches are identified through diffing, React applies these changes to the real DOM. However, instead of directly manipulating the entire DOM, it updates only the necessary parts of the UI. This targeted update reduces the number of expensive operations such as layout and reflow, resulting in better performance.
   * 6 Performance Optimization:
React's Virtual DOM implementation includes additional optimization techniques to further improve performance. For example, React batches multiple updates together and performs them in a single update cycle, minimizing the number of re-renders and DOM manipulations. React also avoids unnecessary updates by skipping the rendering of components that have not changed.
   * 7 Re-rendering and Lifecycles:
As the application continues to interact with users and the state or props of components change, React triggers re-renders and updates to the Virtual DOM. It compares the updated Virtual DOM with the previous version, performs diffing, and efficiently updates the real DOM, ensuring that the UI remains synchronized with the application's data and logic.<br><br>





   
4) Mention some Differences between MySQL and NoSQL.
Ans- <br>  1. On the basis of data model.
      * My SQL   - Structural Query Language.<br/>
                 - it has relational data models.<br/>
               - data is stored in tables with defined schemas.<br/>
     * No SQl  - non structural query language <br/>
                - data models such as key-value, document, columnar, or graph-based. <br/>
                -provides flexible schema designs <br/>
      2 . On the basis of Scalability.
      * My SQL -  provides vertical scalability.<br>
               - More hardware resources required.<br>
      * No SQL - provides horizontal scalability.<br>
               - no extra hardware required.<br>

      3. On the basis of Use Cases.
        * My SQL - used for applications that require structured data <br>
                 - example- e-commerce platforms, banking systems, and content management systems. <br>
        * No SQL - handling large volumes of unstructured or semi-structured data, real-time data processing <br>
                 - example - social media analytics, IoT data storage, and content caching. <br>

  5)  Explain any one DBMS Technology in your own words.<br>               
       Ans - One popular DBMS (Database Management System) technology is MongoDB. It's NoSQL (non-relational) database management system that provides a flexible and scalable approach to storing and retrieving data. It is designed to handle large volumes of unstructured and semi-structured data, making it well-suited for modern applications with evolving data requirements.<br>
MongoDB allows you to store, retrieve, and manipulate data in a way that closely resembles the structure of your application's objects or entities. This makes it easier to represent complex data structures, such as nested arrays or embedded documents, without the need for complex joins or migrations.<br>
MongoDB uses a flexible query language that is similar to JavaScript called the MongoDB Query Language (MQL). MQL allows you to perform complex queries and aggregations, filtering and sorting data based on specific criteria, and even perform geospatial queries for location-based data.<br>
Additionally, MongoDB supports rich indexing capabilities, allowing you to create indexes on fields or combinations of fields to improve query performance. It also provides features like transactions, which ensure atomicity and consistency when performing multiple operations on data.<br>
In summary, MongoDB is a flexible, scalable, and high-performance NoSQL database management system that stores data in document format. It allows for agile development, horizontal scalability, and efficient querying, making it well-suited for modern applications and dynamic data models.        
