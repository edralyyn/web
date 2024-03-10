#app.py

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS module

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Hardcoded username and password
hardcoded_username = "user"
hardcoded_password = "password"

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == hardcoded_username and data['password'] == hardcoded_password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
