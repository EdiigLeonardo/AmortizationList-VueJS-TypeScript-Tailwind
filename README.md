# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Documentation for Amortization List Component
### Overview
The Amortization List component is a Vue.js component that displays a paginated and sortable table of amortization data. It allows users to sort the table by different fields and navigate through the paginated data.

Clone the Project:
Clone or download the project's source code from the repository hosting platform (e.g., GitHub) to your local machine.

### Install Dependencies:
Navigate to the project directory in your terminal or command prompt and install the required dependencies using a package manager such as npm or yarn.

If you are using npm, run:

```js
npm install
```
If you are using yarn, run:

Copy code
```js
yarn install
```
Data Source:
Make sure you have the amortization.js file containing the amortization data at the specified path:

bash
Copy code
src/amortization.js
Ensure that the amortizations variable in the amortization.js file exports an array of amortization data.


If you are using Vue CLI, run:

```sh
npm run serve
```
or

```sh
yarn serve 
```
This will start the development server, and you will see an output similar to:
```sh
App running at:
- Local:   http://localhost:8080/
- Network: http://192.168.0.100:8080/
View the Project:
Open a web browser and navigate to the URL provided by the development server. In the example above, you can access the project by visiting http://localhost:8080/.
```
The Amortization List component should now be visible on the web page, displaying the paginated and sortable table of amortization data.

Interact with the Component:
You can click on the column headers to sort the data based on the respective fields. The "Previous" and "Next" buttons allow you to navigate between different pages of the table.

That's it! You have successfully set up and run the project using the Amortization List component. Feel free to explore and interact with the component, and make any necessary customizations to suit your specific use case.

## Usage
To use the Amortization List component, you can import and include it in your Vue.js application.

```js
<template>
  <div>
    <!-- Other components or content can go here -->

    <!-- Include the AmortizationList component -->
    <amortization-list></amortization-list>
  </div>
</template>

<script>
import AmortizationList from './path/to/AmortizationList.vue';

export default {
  components: {
    AmortizationList
  },
  // Other configuration options for the Vue.js component
};
</script>
```
### Props
The Amortization List component does not have any props.

 - Data
The component defines the following data properties:

amortizations: An array containing the list of amortization data retrieved from the amortizations module.

currentPage: An integer representing the current page of the paginated table.

itemsPerPage: An integer specifying the number of items to be displayed per page.

sortByField: A string representing the field by which the table data should be sorted.

sortAsc: A boolean indicating the sorting order (true for ascending, false for descending).

 - Computed Properties
sortedAmortizations: This computed property returns the sorted array of amortizations based on the sortByField and sortAsc properties.

totalPages: This computed property calculates the total number of pages based on the sorted amortization data and the itemsPerPage value.

paginatedAmortizations: This computed property returns a slice of the sorted amortization data for the current page.

 - Methods
sortBy(field): This method is used to change the sorting field and order of the table data. It takes the field argument, which represents the field to be sorted.

nextPage(): This method increments the currentPage by one, navigating to the next page.

prevPage(): This method decrements the currentPage by one, navigating to the previous page.

 - Template
The template of the Amortization List component displays a table with sortable column headers and paginated data. The table columns can be sorted by clicking on the column headers.

The template consists of the following elements:

<table>: The HTML table element that displays the amortization data.

<thead>: The table header that contains column headers. Clicking on the headers calls the sortBy method to sort the data.

<tbody>: The table body that contains rows of paginated amortization data.

v-for loop: The loop iterates over the paginatedAmortizations computed property to display the rows of amortization data.

Pagination buttons: The "Previous" and "Next" buttons are used to navigate between different pages of the table.



#### Dependencies
The component depends on the amortization module, which provides the data for the amortization list. Make sure that the amortization.js file containing the data is available at the correct path specified in the import statement:

```js
import amortizations from './amortization';
```
 - Note
The provided code is a simplified version of the Amortization List component. If you need to use it in your application, make sure you have all the required dependencies and customize the component's appearance and behavior as per your application's requirements.


