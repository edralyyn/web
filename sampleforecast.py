#sampleforecast.py

def forecast_input(user_input):
    try:
        user_input = int(user_input)
        result = user_input ** 2
        return result
    except ValueError:
        return "Invalid input. Please enter a valid integer."

if __name__ == "__main__":
    forecast_input_input()
