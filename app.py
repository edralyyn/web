# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

hardcoded_username = "user"
hardcoded_password = "password"

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == hardcoded_username and data['password'] == hardcoded_password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')

        # Connect to the SQLite database
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()

        # Check if the username already exists
        cursor.execute("SELECT * FROM users WHERE username=?", (username,))
        existing_user = cursor.fetchone()
        if existing_user:
            return jsonify({'error': 'Username already exists. Please choose a different username.'}), 400

        # Insert the new account into the database
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Account created successfully.'}), 201

    except sqlite3.Error as e:
        return jsonify({'error': 'An error occurred while creating the account.'}), 500

@app.route('/sample', methods=['GET'])
def get_sample():
    output = SampleCollect()
    return jsonify({'output': output})

@app.route('/forecast', methods=['POST'])
def calculate_forecast():
    fdata = request.json
    user_input = fdata.get('user_input')

    try:
        forecast_value = forecast_input(user_input)
        return jsonify({'forecast_value': forecast_value}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
