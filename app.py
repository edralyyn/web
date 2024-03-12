# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
from samplecollect import SampleCollect
from sampleforecast import forecast_input

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
