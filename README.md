#Project Work smart-table-main

<img width="3500" height="3500" alt="localhost_5174_ (1)" src="https://github.com/user-attachments/assets/a9b50014-b18d-43dd-883a-687c125b40f1" />
<img width="3840" height="2500" alt="localhost_5174_ (3)" src="https://github.com/user-attachments/assets/63b96a66-2181-42bf-accc-089b1c3da657" />

The Smart Table project is an interactive table for displaying and processing sales data. During the work on the project, a modular architecture allowing flexible expansion of functionalities was implemented, as well as a transition from working with local data to interaction with external API. The project covers two sprints: the sixth sprint implements the basic functionality of the table, the seventh is the refactoring of code to work with server data.

# Functional
Within the framework of the project the following possibilities have been realized:

## Displays data as a table with dynamic generation of rows based on a template.

- Pagination is the partition of data into pages with the ability to switch between them, displaying the current range of rows and the total number of records.


- Sort—ordering data by selected fields (e.g. date or purchase amount) with visual display of the sorting direction.
- Filtration is the selection of data according to certain criteria (e.g. vendor) using drop-down lists and input fields.
- Search — search for keywords in several fields (date, client, seller).
- API is the collection of data from the server by passing search, filtering, sorting, and pagination parameters through query parameters.
- Query caching is an optimization of working with the server by saving the results of previous queries under unchanged parameters.
- Architecture and development approach
Modular architecture


# The project is built on the modular principle: 
each functional block (pagination, sorting, filtering, searching) is implemented in a separate JS-module in the src/components/ directory. All modules follow a single initialization template




# Data processing conveyor
In the sixth sprint, the data were processed locally:
Source data → Search → Filter → Sort → Paganization → Output to the table.


# Event processing
## A single form covering the entire table is used to manage the table. Events are processed:
```
`change` — change of values in the form fields;
`submit` — sending the form (used to sort and switch pages);
`reset` — reset form (with delay for correct status update).
```
All events are reduced to calling a single table re-drawing function, which minimizes the number of processors.






# Sprint implementation
Sprint 6: Basic implementation of a "smart" table
At this stage, the work with local data was implemented. The main tasks are:

Data output to a table — the src/components/table.js file implements generation of rows based on a template using cloneTemplate function.
Pagination — Added the pagination.js module, which calculates the number of pages, displays navigation buttons, and controls the range of the output lines.
Sort — sorting.js module allows you to sort data by selected fields with a sorting direction switch.
Filtration — the filtering.js module implements data filtering based on values in the form fields.
Search — Search.js module adds the ability to search across multiple data fields.
At this stage, supporting functions from the src/lib/ directory (e.g. to compare values and sort collections) were actively used.




# Project structure
```
smart-table-main/
├── .github/
├── node_modules/
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── filtering.js      # filtration module
    │   ├── pagination.js     # Paganization module
    │   ├── searching.js      # Search module
    │   ├── sorting.js        # sorting module
    │   └── table.js          # Table module
    ├── data/
    │   ├── dataset_1.js      # Local data (used for autotests)
    │   ├── dataset_2.js
    │   └── dataset_3.js
    ├── lib/
    │   ├── compare.js       # additional features for comparison
    │   ├── sort.js          # auxiliary functions for sorting
    │   ├── utils.js
    │   └── data.js          # Data and API functions
    ├── main.js              # entry point, initialization and rendering of the table
    ├── style.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── README.md
```


#    Technologies and tools
- JavaScript is the main implementation language.
- Vite is a tool for building and running a project in development mode.
- HTML/CSS is the layout and styling of the interface.




# How to start a project
Clone the repository.
Set dependencies:
```
bash
npm install
```
Run the project in development mode:
```
bash
npm run dev
```
Open the link specified in the console in the browser.


# During the work on the project the following skills were mastered:

- design of the application's modular architecture;
- implementation of the data processing pipeline;
- work with asynchronous code and API;
- рефакторинг существующего кода для изменения способа получения данных;
- оптимизация кода за счёт удаления избыточных функций.
- submit — отправка формы (используется для сортировки и переключения страниц);
reset — сброс формы (с задержкой для корректного обновления состояния).
Все события сводятся к вызову единой функции перерисовки таблицы, что минимизирует количество обработчиков.
