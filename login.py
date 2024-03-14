# login.py

def authenticate(username, password):
    from models import User  # Import the User model here to avoid circular import
    try:
        # Query the database for the user with the provided username
        user = User.objects(username=username).first()

        # Check if the user exists and if the password matches
        if user and user.password == password:
            return {'message': 'Login successful'}, 200
        else:
            return {'error': 'Invalid username or password'}, 401
    except Exception as e:
        return {'error': 'An error occurred: {}'.format(e)}, 500
