## Script's description
Here you will find both scripts that make a direct tansition between the pre-defined _.xlsx_ file and the SQLite database.
## Dependencies
* openpyxl
* pandas
* csv
* sqlite3
## How to
- Assure that all dependencies are installed
- Assure the _data.xlsx_ file is inside the folder _./data/_
- Execute core.py file

After that, if there was no errors a test.db (name can be changed in _core.main()_) should be created in the core.py file's directory.

## Code description
### Core.py
Owner of 2 functions
* create_main_tables: where the tables _teams_, _evaluators_, _category_ and _super\_users_ are created.
    - teams:
        * id INTEGER NOT NULL
        * name TEXT NOT NULL
        * category TEXT NOT NULL
        * members TEXT NOT NULL
        * description TEXT NOT NULL
        * classes TEXT NOT NULL
    - evaluators:
        * id INTEGER NOT NULL
        * email TEXT NOT NULL
        * name TEXT NOT NULL
        * evaluate TEXT NOT NULL
    - category:
        * id INTEGER NOT NULL,
        * name TEXT NOT NULL
    - super_users (WORK IN POGRESS):
        * surname TEXT NOT NULL,
        * psswd TEXT NOT NULL
* main: where functions are called to execute, both _create\_main\_tables_ and the _main()_ function from _input\_data.py_

### input_data.py
Owner of 6 functions
* create_vote_tables
    - as the name suggests, this function creates the voting tables according to the ammount of categories that exist in the _Categorias.csv_ file.
* into_vote_tables
    - where the _Equipos.csv_ file is read and according to each team's category, they are inserted in due category voting table.
* create_csvs
    - where the _data.xlsx_ file found in the ./data/ directory is broken down into _.csv_ files.
* clear_csvs
    - where all _.csv_ files that need to be updated automatically from the _.xlsx_ file are goint to be DELETED to then be created by the _create\_csvs_ function.
* into_main_tables
    - where data is going to be inserted to the following tables:
        * _teams_
        * _category_
        * _evaluators_
* main
    - where previous functions are called in order.