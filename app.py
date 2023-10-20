import os
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify

# Get the directory of the current Python script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the relative path to the database file
db_path = os.path.join(script_dir, "Resources", "insurance.db")

# Create the database engine using the relative path
engine = create_engine(f"sqlite:///{db_path}")

app = Flask(__name__)

@app.route("/insurance_data")
def get_insurance_data():
    # Establish a database connection
    connection = engine.connect()

    # Define your SQL query to select data from the 'insurance csv for sql' table
    sql_query = "SELECT * FROM 'insurance csv for sql'"

    # Execute the query and fetch the results
    results = connection.execute(sql_query).fetchall()

    # Close the database connection
    connection.close()

    # Format the results as needed (e.g., convert to a list of dictionaries)
    formatted_results = [dict(result) for result in results]

    return jsonify(formatted_results)

if __name__ == "__main__":
    app.run(debug=True)

