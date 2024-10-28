#
#  Sample filtered_df as a list of dictionaries

filtered_df = [
    {'company_code': 'abc', 'Transaction_code': 'T001', 'Doctype_key': 'D01'},
    {'company_code': 'abc', 'Transaction_code': 'T001', 'Doctype_key': 'D01'},
    {'company_code': 'abc', 'Transaction_code': 'T002', 'Doctype_key': 'D02'},
    {'company_code': 'xyz', 'Transaction_code': 'T001', 'Doctype_key': 'D01'}
]

# Step 1: Filter the data for company_code "abc"
filtered_data = [entry for entry in filtered_df if entry['company_code'] == "abc"]

# Step 2: Group the data by Transaction_code and Doctype_key
grouped_counts = {}
for entry in filtered_data:
    key = (entry['Transaction_code'], entry['Doctype_key'])
    if key in grouped_counts:
        grouped_counts[key] += 1
    else:
        grouped_counts[key] = 1

# Step 3: Convert the grouped data into a list of dictionaries
pattern_data = [
    {'Transaction_code': transaction_code, 'Doctype_key': doctype_key, 'counts': count}
    for (transaction_code, doctype_key), count in grouped_counts.items()
]

# Output the pattern_data
print(pattern_data)