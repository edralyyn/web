# signup.py

from models import User  # Import the User model from your models module
from flask import request, jsonify  # Import Flask's request and jsonify functions

def create_account():
    try:
        # Extract username and password from the request data
        username = request.json.get('username')
        password = request.json.get('password')

        # Check if the username already exists
        existing_user = User.objects(username=username).first()
        if existing_user:
            return jsonify({'error': 'Username already exists. Please choose a different username.'}), 400

        # Create a new user document and save it to the database
        new_user = User(username=username, password=password)
        new_user.save()
        return jsonify({'message': 'Account created successfully.'}), 201
    except Exception as e:
        return jsonify({'error': 'An error occurred: {}'.format(e)}), 500
