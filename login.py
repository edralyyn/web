import sqlite3

def authenticate(username, password):
    try:
        # Connect to the SQLite database
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        
        # Check if the username and password match
        cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
        user = cursor.fetchone()
        
        if user:
            print("Authentication successful. Welcome, {}!".format(username))
        else:
            print("Incorrect username or password. Please try again.")
        
        # Close the database connection
        conn.close()
    except sqlite3.Error as e:
        print("SQLite error:", e)

# Example usage:
username = input("Enter your username: ")
password = input("Enter your password: ")
authenticate(username, password)
