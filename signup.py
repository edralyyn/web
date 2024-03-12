#signup.py

import sqlite3

def create_account():
    try:
        # Connect to the SQLite database
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()

        # Prompt the user to enter a username
        while True:
            username = input("Enter a username: ")
            # Check if the username already exists
            cursor.execute("SELECT * FROM users WHERE username=?", (username,))
            existing_user = cursor.fetchone()
            if existing_user:
                print("Username already exists. Please choose a different username.")
            else:
                break

        # Prompt the user to enter a password twice
        while True:
            password = input("Enter a password: ")
            confirm_password = input("Confirm your password: ")
            if password == confirm_password:
                break
            else:
                print("Passwords do not match. Please try again.")

        # Insert the new account into the database
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        print("Account created successfully.")

        # Close the database connection
        conn.close()
    except sqlite3.Error as e:
        print("SQLite error:", e)

# Call the create_account function to run it
create_account()
