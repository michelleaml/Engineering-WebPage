import sqlite3 as sq
import os
import input_data


def create_main_tables(db):
    try:
        if os.path.exists(db):
            os.remove(db)  # removes previous db
        sqliteConnection = sq.connect(db)  # sq.connect creates db
        cursor = sqliteConnection.cursor()  # cursor to execute querys
        print("Database created and connected")

        sq_query = "select sqlite_version();"
        cursor.execute(sq_query)
        print("SQLite Database version:", cursor.fetchall())

        # Members and their info are going to be separated by a separator between member such as &:
        #      Daniel Cruz, t031044, ICC&David Roldan, ...
        # Classes are also going to be separated by a comma, such as:
        #      Math, Phisics, ...
        create_query = """CREATE TABLE teams(
        id INTEGER NOT NULL,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        modality TEXT NOT NULL,
        members TEXT NOT NULL,
        description TEXT NOT NULL,
        classes TEXT NOT NULL
        )"""
        cursor.execute(create_query)
        sqliteConnection.commit()
        print("Successfully created TEAMS table")

        create_query = """CREATE TABLE evaluators(
        id INTEGER NOT NULL,
        email TEXT NOT NULL,
        name TEXT NOT NULL,
        evaluate TEXT NOT NULL
        )"""
        cursor.execute(create_query)
        sqliteConnection.commit()
        print("Successfully created EVALUATORS table")

        create_query = """CREATE TABLE category(
        id INTEGER NOT NULL,
        name TEXT NOT NULL
        )"""
        cursor.execute(create_query)
        sqliteConnection.commit()
        print("Successfully created CATEGORY table")

        create_query = """CREATE TABLE super_users(
        surname TEXT NOT NULL,
        psswd TEXT NOT NULL
        )"""
        cursor.execute(create_query)
        sqliteConnection.commit()
        print("Successfully created SUPER_USERS table")

        cursor.close()

    except sq.Error as error:
        print("error while connecting to sqlite:", error)

    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("Closed SQLite connection")
            return db


def main():
    db = "test.sqlite"
    create_main_tables(db)
    input_data.main(db)


main()
