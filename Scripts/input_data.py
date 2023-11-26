import csv, os
import pandas as pd
import sqlite3


def create_vote_tables(db):
    try:
        # db connectivity
        sqliteConnection = sqlite3.connect(db)
        cursor = sqliteConnection.cursor()
        print("Successfully connected to sqlite for voting table creation")

        with open("Scripts/data/Categorias.csv", newline="") as f:
            reader = csv.reader(f)
            counter = 0
            for row in reader:
                create_query = f"""CREATE TABLE {'votes_'+row[0].lower().replace(" ","")} (
                team TEXT NOT NULL,
                points INTEGER NOT NULL
                );"""
                cursor.execute(create_query)
                print(f"Succesfully created {row[0]} table")
        sqliteConnection.commit()
        print("Succesfully created all VOTES tables")
    except sqlite3.Error as error:
        print("Error while creating voting tables", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("sqlite connection closed")


def into_vote_tables(db):
    try:
        sqliteConnection = sqlite3.connect(db)
        cursor = sqliteConnection.cursor()
        print("Successfully connected to sqlite for voting table insertion")

        with open("Scripts/data/Equipos.csv", newline="") as f:
            reader = csv.reader(f)
            counter = 0
            for row in reader:
                # [0] name
                # [1] category
                insert_query = f"""INSERT INTO {'votes_'+row[1].lower().replace(" ","")} (
                team, points) VALUES (?, ?)"""
                data_tuple = (row[0], 0)
                cursor.execute(insert_query, data_tuple)
        sqliteConnection.commit()
        print("Succesfully inserted teams into voting tables")
    except sqlite3.Error as error:
        print("Error while inserting data into voting tables")
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("SQLite connection is closed.")


def create_csvs():
    try:
        excel_file = "Scripts/data/data.xlsx"
        all_sheets = pd.read_excel(excel_file, sheet_name=None)
        sheets = all_sheets.keys()
        for sheet_name in sheets:
            sheet = pd.read_excel(excel_file, sheet_name=sheet_name, header=1)
            sheet.to_csv("Scripts/data/%s.csv" % sheet_name, index=False)
        print("Successfully created csv files")
    except:
        print("Error creating csv files")


def clear_csvs():
    if os.path.exists("Scripts/data/Categorias.csv"):
        os.remove("Scripts/data/Categorias.csv")
        os.remove("Scripts/data/Equipos.csv")
        os.remove("Scripts/data/Evaluadores.csv")
        print("Removed all previous csv files")
        return
    print("No csv files to remove")
    return


def into_main_tables(db):
    try:
        # db connectivity
        sqliteConnection = sqlite3.connect(db)
        cursor = sqliteConnection.cursor()
        print("Successfully connected to sqlite for data insertion")

        # Insert data into Equipos.csv
        with open("Scripts/data/Equipos.csv", newline="") as f:
            reader = csv.reader(f)
            counter = 0
            for row in reader:
                counter += 1
                # [0][name,
                # [1] category,
                # [2] modality,
                # [3] member's names,
                # [4] member's ids,
                # [5] member's careers,
                # [6] Description,
                # [7] Classes]
                members = ""
                names = row[3].split(",")
                ids = row[4].split(",")
                careers = row[5].split(",")
                for i in range(len(names)):
                    members += f"{names[i]}\n"
                insert_query = f"""INSERT INTO teams 
                (id, name, category, modality, members, description, classes) VALUES (?, ?, ?, ?, ?, ?, ?);"""
                data_tuple = (counter, row[0], row[1], row[2], members, row[6], row[7])
                cursor.execute(insert_query, data_tuple)
        sqliteConnection.commit()
        print("Succesfully inserted values into TEAMS table", cursor.rowcount)

        # Insert data into CATEGORY table
        with open("Scripts/data/Categorias.csv", newline="") as f:
            reader = csv.reader(f)
            counter = 0
            for row in reader:
                # [0] name
                counter += 1
                insert_query = """INSERT INTO category
                (id, name) VALUES (?, ?);"""
                data_tuple = (counter, row[0])
                cursor.execute(insert_query, data_tuple)
        sqliteConnection.commit()
        print("Succesfully inserted values into CATEGORY table", cursor.rowcount)

        # Insert data into EVALUATORS
        with open("Scripts/data/Evaluadores.csv", newline="") as f:
            reader = csv.reader(f)
            counter = 0
            for row in reader:
                # [0] email
                # [1] name
                # [2] evaluate
                counter += 1
                insert_query = """INSERT INTO evaluators
                (id, email, name, evaluate, password) VALUES (?,?,?,?,?)"""
                data_tuple = (counter, row[0], row[1], row[2], 'Ev4lu4d0r3s')
                cursor.execute(insert_query, data_tuple)
        sqliteConnection.commit()
        print("Succesfully inserted values into evaluators table", cursor.rowcount)

        cursor.close()

    except sqlite3.Error as error:
        print("Error inserting data into database", error)

    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("Closed SQLite connection")


def main(db):
    try:
        clear_csvs()  # removes previous csv files

        create_csvs()  # creates csv files from data.xlsx file in 'data' folder

        into_main_tables(db)  # inserts data to main tables

        create_vote_tables(db)  # creates tables for each category

        into_vote_tables(db)
        print("Finished executing program succesfully")

    except:
        print("Finished executing program with ERRORS")
