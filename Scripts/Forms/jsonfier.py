import json
import sqlite3 as sq


def main(db):
    sqliteConnection = sq.connect(db)  # sq.connect creates db
    cursor = sqliteConnection.cursor()  # cursor to execute querys
    query = "select name from category"
    rows = cursor.execute(query)
    rows = [" ".join(map(str, row)) for row in rows]
    for i in rows:
        creator(i, db)


def creator(i, db):
    x = """
        "requests": [
            {
                "createItem": {
                    "item": {
                        "title": (
                            "In what year did the United States land a mission on"
                            " the moon?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "choiceQuestion": {
                                    "type": "RADIO",
                                    "options": [
                                        {"value": "1965"},
                                        {"value": "1967"},
                                        {"value": "1969"},
                                        {"value": "1971"},
                                    ],
                                    "shuffle": True,
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            }
        ]
    """


main("server/db/database.sqlite")
