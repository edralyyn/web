export function square_input(user_input) {
    try {
        user_input = parseInt(user_input);
        const result = user_input ** 2;
        return result;
    } catch (error) {
        return "Invalid input. Please enter a valid integer.";
    }
}
