#!/usr/bin/env python3
import json
import os
import base64

def extract_project():
    # Read the source-code.json file
    with open('source-code.json', 'r') as f:
        data = json.load(f)
    
    # Extract files
    files = data.get('files', [])
    print(f"Found {len(files)} files to extract")
    
    # Create files
    for file in files:
        name = file.get('name', '')
        binary = file.get('binary', False)
        contents = file.get('contents', '')
        
        # Handle directory structure
        directory = os.path.dirname(name)
        if directory and not os.path.exists(directory):
            os.makedirs(directory, exist_ok=True)
        
        # Write file
        if binary:
            print(f"Skipping binary file: {name}")
            continue
        else:
            with open(name, 'w') as f:
                f.write(contents)
            print(f"Created: {name}")
    
    print("\nProject extraction complete. You can now run:")
    print("npm install")
    print("npm run dev")

if __name__ == "__main__":
    extract_project()