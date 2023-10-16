import csv
import json
import os

# Specify the full path to the CSV file
csv_file = 'C:/Users/umran/OneDrive/Desktop/p3/Resources/insurance.csv'

# Specify the full path for the JSON output file
json_file = 'C:/Users/umran/OneDrive/Desktop/p3/Resources/insurance.json'

data = []

# Open and read the CSV file
with open(csv_file, 'r') as csv_input:
    csv_reader = csv.DictReader(csv_input)
    for row in csv_reader:
        data.append(row)

# Write the data to a JSON file
with open(json_file, 'w') as json_output:
    json.dump(data, json_output, indent=4)

print(f'CSV file "{csv_file}" has been converted to JSON file "{json_file}".')
import json
