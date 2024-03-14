# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from login import authenticate
from signup import create_account
from samplecollect import SampleCollect
from sampleforecast import forecast_input

app = Flask(__name__)
CORS(app)
app.config['MONGODB_SETTINGS'] = {
    'db': 'admin',
    'host': 'mongodb://localhost:27017/admin'
}

db = MongoEngine(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Call the authenticate function from login.py
    response, status_code = authenticate(username, password)
    return jsonify(response), status_code

@app.route('/signup', methods=['POST'])
def signup():
    return create_account()

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
        return jsonify({'error': 'An error occurred: {}'.format(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)