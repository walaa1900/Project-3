import pandas as pd
import sqlite3

# Step 1: Read the CSV file into a DataFrame
csv_file = 'insurance.csv'
df = pd.read_csv(csv_file)

# Step 2: Create a SQLite database and connect to it
database_file = 'insurance_database.db'
conn = sqlite3.connect(database_file)

# Step 3: Write the DataFrame to a table in the SQLite database
table_name = 'insurance_table_name'  # Specify the table name
df.to_sql(table_name, conn, if_exists='replace', index=False)

# Close the database connection
conn.close()

print(f'CSV data successfully loaded into SQLite table: {table_name}')
